import { Product } from "../types";
import { fetchAPI } from "../lib/api";

export const getAllProducts = async (): Promise<Product[]> => {
  const products = await fetchAPI<Product[]>("/products");
  return products ?? [];
};

export const getProductById = async (
  id: string
): Promise<Product | null> => {
  return await fetchAPI<Product>(`/products/${id}`);
};