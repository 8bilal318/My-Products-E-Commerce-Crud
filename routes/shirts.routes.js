import express from "express";
import {
  getShirts,
  addShirtsForm,
  addShirts,
  editShirtsForm,
  updateShirts,
  deleteShirts,
} from "../controller/shirts.controller.js";

const router = express.Router();

router.get("/", getShirts);
router.get("/add", addShirtsForm);
router.post("/add", addShirts);
router.get("/edit/:id", editShirtsForm);
router.post("/edit/:id", updateShirts);
router.get("/delete/:id", deleteShirts);

export default router;
