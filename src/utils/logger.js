import { createLogger, transports, format } from "winston";
import "winston-mongodb";
import { config } from "dotenv";
config();
const logger = createLogger({
  transports: [
    new transports.Console({
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

export default logger;
