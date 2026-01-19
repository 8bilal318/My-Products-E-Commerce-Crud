import express from "express";
import {
  getCoats,
  addCoatsForm,
  addCoats,
  editCoatsForm,
  updateCoats,
  deleteCoats,
} from "../controller/coats.controller.js";

const router = express.Router();

router.get("/", getCoats);
router.get("/add", addCoatsForm);
router.post("/add", addCoats);
router.get("/edit/:id", editCoatsForm);
router.post("/edit/:id", updateCoats);
router.get("/delete/:id", deleteCoats);

export default router;
