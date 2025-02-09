import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); //to parse the json data

app.use("/api/products", productRoutes);


console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port" + PORT);
});
