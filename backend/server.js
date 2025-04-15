import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";

const app = express();
dotenv.config()
app.get("/", (req, res ) => {
    res.send("server is ready brother")
})


app.get("/products", async (req, res ) => {
    
})

app.listen(5000, () => {
    connectDB()
    console.log("server started at port 5000")
})