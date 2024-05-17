import mongoose from "mongoose";
import "dotenv/config";
import app from "./app.js";
import { logger } from "./utils.js";

// Function to start the server
(async () => {
    try {
        const { MONGO_URL, PORT = 3001 } = process.env;

        await mongoose.connect(MONGO_URL);
        logger.info("Successfully connected to the database.");

        app.listen(PORT, () => {
            logger.info(`Server listens on http://localhost:${PORT}`);
        });
    } catch (err) {
        logger.error(`An error has occurred: ${err.stack}`);
        process.exit(1);
    }
})();