import express, { Router } from "express";
import multer from "multer";
import AuthController from "../controllers/user.controller";
import auth from "../middleware/authenticate.guard";
import { storage } from "../middleware/multer.guard";
import catchAsync from "../utils/catchAsync";

const upload = multer({ storage });

const router: Router = express.Router();

router.post(
  "/register",
  // auth.isAuthenticated,
  catchAsync(AuthController.registerUser),
);

router.post("/login", catchAsync(AuthController.loginUser));
router.post("/forgot-password", catchAsync(AuthController.forgotPassword));
router.post("/verify-otp", catchAsync(AuthController.verifyOtp));
router.get("/", auth.isAuthenticated, catchAsync(AuthController.getAllUser));

router.get(
  "/totaluser",
  auth.isAuthenticated,
  catchAsync(AuthController.totalCount),
);
router.get("/:id", catchAsync(AuthController.getUserById));
router.patch(
  "/update-user/:id",
  upload.single("profileImage"),
  catchAsync(AuthController.updateUserById),
);
router.patch("/reset-password", catchAsync(AuthController.resetPasswords));
router.patch("/change-password/:id", catchAsync(AuthController.updatePassword));
router.delete(
  "/delete-user/:id",
  auth.isAuthenticated,
  catchAsync(AuthController.deleteUser),
);

export default router;
