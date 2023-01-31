import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import apiRoutes from "./routes/apiRoutes.js";

dotenv.config();

const app = express();
const PORT = 8080 || process.env.PORT;

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "*" }));

//Routes
app.use("/api/chat", apiRoutes);

// Start Server
const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
};

startServer();
