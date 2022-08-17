"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userController_1 = require("../controller/userController");
router.post("/register", userController_1.RegisterUser);
router.get("/login", (req, res) => {
    res.render("login");
});
router.get("/addnew", (req, res) => {
    res.render("newcourse");
});
router.get("/updatecourse", (req, res) => {
    res.render("updatecourse");
});
router.get("/editcourse", (req, res) => {
    res.render("editcourse");
});
router.get("/dashboard", userController_1.defaultView, (req, res) => {
    res.render("dashboard");
});
router.post("/login", userController_1.LoginUser);
router.get("/logout", userController_1.LogoutUser);
router.get("/allusers", userController_1.getUsers);
exports.default = router;
