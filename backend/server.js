import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Products from "./model/product.model.js";
import productRoutes from "./routes/product.route.js"
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json()); // allow ous to accept json data as body
dotenv.config();
app.get("/", (req, res) => {
  res.send("server is ready brother");
});

app.use("/api/products", productRoutes)

app.listen(PORT, () => {
  connectDB();
  console.log("server started at port 5000");
});
