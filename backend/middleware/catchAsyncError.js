// cái này để khi gặp lỗi thì máy chủ k dừng lại
module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
