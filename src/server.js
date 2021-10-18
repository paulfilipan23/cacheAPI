import express, { json } from "express";
import { config } from "dotenv";
import { connect, connection as _connection } from "mongoose";
import logger from "@utils/logger";
import routes from "./routes";

config();
//connect to DB
connect(process.env.DB_CONNECT, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const app = express();
const connection = _connection;

connection.once("open", function () {
  logger.log("info", "MongoDB database connection established successfully");
});
//Middleware
app.use(json());
app.use("/", routes);

//Router middlewares
const port = process.env.PORT || 3000;
app.listen(port, () =>
  logger.log("info", `Server Up and running on port ${port}`)
);

module.exports = app;
