import { Request, Response } from "express";

import {
  sendErrorResponse,
  sendSuccessResponse,
} from "../utils/responseHelper";
import {
  addProductServices,
  deleteProductServices,
  getAllProductServices,
  getProductByIdServices,
  updateProductByIdServices,
} from "../services/product.service";

class ProductController {
  static async addProduct(req: Request, res: Response) {
    try {
      const {
        name,
        description,
        price,
        originalPrice,
        sizes,
        category,
        rating,
        reviews,
        stock,
        status,
        images,
      } = req.body;

      const products = await addProductServices(
        name,
        description,
        price,
        originalPrice,
        sizes,
        category,
        rating,
        reviews,
        stock,
        status,
        images,
      );

      return sendSuccessResponse(
        res,
        "Product added successfully",
        products,
        201,
      );
    } catch (err: any) {
      console.log("ADD PRODUCT ERROR:", err);

      return sendErrorResponse(res, err.message || "Error adding product", 400);
    }
  }

  static async getAllProduct(req: Request, res: Response) {
    try {
      const products = await getAllProductServices();
      return sendSuccessResponse(
        res,
        "Product fetched successfully",
        products,
        200,
      );
    } catch (err: any) {
      return sendErrorResponse(res, "Error fetching product", 400);
    }
  }

  static async getProductById(req: Request, res: Response) {
    try {
      let id: any;
      id = req.params.id;

      const products = await getProductByIdServices(id);
      return sendSuccessResponse(
        res,
        "Product fetched successfully",
        products,
        200,
      );
    } catch (err: any) {
      return sendErrorResponse(res, "Error fetching product", 400);
    }
  }

  static async updateProductById(req: Request, res: Response) {
    try {
      let id = req.params.id;
      let data = req.body;
      const products = await updateProductByIdServices(id as any, data);
      return sendSuccessResponse(
        res,
        "Product updated successfully",
        products,
        201,
      );
    } catch (err: any) {
      if (err.message === "PRODUCT_NOT_FOUND") {
        return sendErrorResponse(res, "Product not found", 400);
      }
      return sendErrorResponse(res, "Error updating product", 400);
    }
  }

  static async deleteProduct(req: Request, res: Response) {
    try {
      let id = req.params.id;
      const products = await deleteProductServices(id as any);
      return sendSuccessResponse(
        res,
        "Product deleted successfully",
        products,
        201,
      );
    } catch (err: any) {
      if (err.message === "PRODUCT_NOT_FOUND") {
        return sendErrorResponse(res, "Product not found", 400);
      }
      return sendErrorResponse(res, "Error deleting product", 400);
    }
  }
}

export default ProductController;
