const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./db/Database");
// config
dotenv.config({
  path: "backend/config/.env",
});

// connect database
connectDatabase();

// tạo server

const server = app.listen(process.env.PORT, () => {
  console.log(`server hoạt động on http://localhost:${process.env.PORT}`);
});
