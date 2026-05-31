import { fetchAPI } from "../lib/api";
import { Bank } from "../types";

export const getAllBanks = async (): Promise<Bank[]> => {
  const banks = await fetchAPI<Bank[]>("/banks");
  return banks ?? [];
};