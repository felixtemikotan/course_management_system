import express from "express";
import { auth } from "../middleware/auth";

const router = express.Router();

import {
  createCourse,
  getCourse,
  getSingleCourse,
  getDeleteSingleCourse,
  updateCourse,
  deleteCourse,
} from "../controller/courseController";

router.post("/create", auth, createCourse);
router.get("/read", getCourse);
router.get("/read/:id", getSingleCourse);
router.post("/update/:id", auth, updateCourse);
router.get("/readdelete/:id", auth, getDeleteSingleCourse);
router.post("/delete/:id", auth, deleteCourse);

export default router;
