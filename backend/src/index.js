import express from "express";
import dotenv from "dotenv";
const app = express();
import authRoutes from "./routes/auth.route.js"

dotenv.config();
app.use("/api/auth",authRoutes);

const  PORT=process.env.PORT;

app.listen(PORT, () => {
    console.log("Server is running on port"+ PORT);
})
