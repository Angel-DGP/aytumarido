import express from "express";
import {
  createForm,
  deleteForm,
  getAllData,
  getOneData,
  updateForm,
} from "../controllers/formControllers.js";
const router = express.Router();

router.get("/", getAllData);
router.get("/:id", getOneData);
router.post("/", createForm);
router.put("/:id", updateForm);
router.delete("/:id", deleteForm);

export default router;
