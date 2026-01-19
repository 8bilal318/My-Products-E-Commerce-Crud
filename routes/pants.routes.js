import express from "express";
import {
  getPants,
  addPantsForm,
  addPants,
  editPantsForm,
  updatePants,
  deletePants,
} from "../controller/pants.controller.js";

const router = express.Router();

router.get("/", getPants);
router.get("/add", addPantsForm);
router.post("/add", addPants);
router.get("/edit/:id", editPantsForm);
router.post("/edit/:id", updatePants);
router.get("/delete/:id", deletePants);

export default router;
