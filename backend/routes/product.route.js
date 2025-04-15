import express from "express";
import mongoose from "mongoose";
import Products from "../model/product.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in getting products:", error.message);
    res.status(500).json({ success: false, message: "Product geting failed" });
  }
});

router.post("/", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all information" });
  }

  const newProduct = new Products(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, message: "Product created" });
  } catch (error) {
    console.error("Error in create products:", error.message);
    res.status(500).json({ success: false, message: "Product created failed" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Products.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "product is gone" });
  } catch (error) {
    console.error("Error in delete products:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Product deletion failed" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const info = req.body;
  try {
    const productToUpdate = await Products.findById(id);
    if (!productToUpdate) {
      res.status(404).json({ success: false, message: "Produc not found" });
    }

    await Products.findByIdAndUpdate(id, info, { new: true });
    res.status(200).json({ success: true, data: productToUpdate });
  } catch (error) {
    console.error("Error in update products:", error.message);
    res.status(500).json({ success: false, message: "Product update failed" });
  }
});


export default router