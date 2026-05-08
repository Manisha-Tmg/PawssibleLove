import Product from "../database/models/product.models";

export const addProductServices = async (
  name: string,
  description: string,
  price: number,
  originalPrice: string,
  sizes: string,
  category: string,
  rating: string,
  reviews: string,
  stock: number,
  status: string,
  images: string,
) => {
  const products = await Product.create({
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
  });

  return products;
};

export const getAllProductServices = async () => {
  const products = await Product.findAll();
  return products;
};

export const getProductByIdServices = async (id: string) => {
  const products = await Product.findByPk(id);
  return products;
};

export const updateProductByIdServices = async (id: string, data: any) => {
  const products = await Product.findByPk(id);

  if (!products) {
    throw new Error("PRODUCT_NOT_FOUND");
  }

  await products.update(data);

  return products;
};

export const deleteProductServices = async (id: string) => {
  const products = await Product.findByPk(id);

  if (!products) {
    throw new Error("PRODUCT_NOT_FOUND");
  }

  await products.destroy();

  return products;
};
