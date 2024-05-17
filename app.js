// Import modules
import express from "express";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";

// Initialize Express app
const app = express();

// Apply middleware
app.use(helmet());
app.use(compression());
app.use(morgan("combined"));
app.use(express.static("public"));
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// Set view engine to Pug
app.set("view engine", "pug");

// Export the configured Express app
export default app;