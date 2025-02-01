import express from "express";
import dotenv from "dotenv";
const app = express();
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();
app.use(express.json());
app.use(cookieParser())

app.use("/api/auth",authRoutes);

const  PORT=process.env.PORT;

app.listen(PORT, () => {
    console.log("Server is running on port"+ PORT);
    connectDB();
})
