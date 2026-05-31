import { fetchAPI } from "../lib/api";
import { Category } from "../types";

export const getAllCategories = async (): Promise<Category[]> => {
  const categories = await fetchAPI<Category[]>("/categories");
  return categories ?? [];
};