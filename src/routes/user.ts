import express from "express";
const router = express.Router();
import {
  RegisterUser,
  LoginUser,
  LogoutUser,
  getUsers,
  defaultView,
} from "../controller/userController";

router.post("/register", RegisterUser);
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
router.get("/dashboard", defaultView, (req, res) => {
  res.render("dashboard");
});

router.post("/login", LoginUser);
router.get("/logout", LogoutUser);
router.get("/allusers", getUsers);

export default router;
