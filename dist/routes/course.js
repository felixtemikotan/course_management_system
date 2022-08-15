"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
const courseController_1 = require("../controller/courseController");
router.post("/create", auth_1.auth, courseController_1.createCourse);
router.get("/read", courseController_1.getCourse);
router.get("/read/:id", courseController_1.getSingleCourse);
router.post("/update/:id", auth_1.auth, courseController_1.updateCourse);
router.get("/readdelete/:id", auth_1.auth, courseController_1.getDeleteSingleCourse);
router.post("/delete/:id", auth_1.auth, courseController_1.deleteCourse);
exports.default = router;
