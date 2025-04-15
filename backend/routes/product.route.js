import express from "express";
import mongoose from "mongoose";
import Products from "../model/product.model.js";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);

export default router;
