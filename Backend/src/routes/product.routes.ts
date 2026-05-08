import express, { Router } from "express";
import ProductController from "../controllers/product.controller";
import { Role } from "../enum/auth.enum";
import auth from "../middleware/authenticate.guard";
import catchAsync from "../utils/catchAsync";

const router: Router = express.Router();

router.post(
  "/add-product",
  // auth.isAuthenticated,
  // auth.restrictTo(Role.Superadmin),
  catchAsync(ProductController.addProduct),
);
router.get("/", catchAsync(ProductController.getAllProduct));
router.get("/:id", catchAsync(ProductController.getProductById));
router.patch(
  "/update-product/:id",
  auth.isAuthenticated,
  catchAsync(ProductController.updateProductById),
);
router.delete(
  "/delete-product/:id",
  auth.isAuthenticated,
  catchAsync(ProductController.deleteProduct),
);

export default router;
