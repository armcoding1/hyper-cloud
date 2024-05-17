import { createLogger, format, transports } from "winston";

// Create Winston logger
export const logger = createLogger({
    level: "info",
    transports: [
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.simple()
            )
        })
    ]
});