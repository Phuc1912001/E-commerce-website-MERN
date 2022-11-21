class Features {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            // Nói chung là Regex còn nhiều ứng dụng hữu ích khác,
            // tóm gọn lại một chút là hiểu đơn giản thì regex là một chuỗi các kí tự miêu tả một bộ các chuỗi ki tự khác
            // theo những quy tắc và cú pháp nhất định.
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    // Removing some field for category
    const removeFields = ["keyword", "page", "limit"];

    removeFields.forEach((key) => delete queryCopy[key]);

    this.query = this.query.find(queryCopy);
    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (currentPage - 1);// skip là bỏ qua ví dụ như curentPage = 2 thì skip =8 tức là bỏ qua 8 sản phẩm đầu 

    this.query = this.query.limit(resultPerPage).skip(skip);

    return this;
  }
}

module.exports = Features;
