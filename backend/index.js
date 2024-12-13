import express from "express";
import userRoutes from "./routes/userRoutes.js"; // Adjust the path based on your project structure
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Database connection
connectDB();

// Routes
app.use("/api/users", userRoutes); // Use the user routes

app.get("/", (req, res) => {
    res.send("Welcome to the API");
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
