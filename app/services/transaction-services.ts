import { fetchAPI } from "../lib/api";
import { Transaction } from "../types";

export const transactionCheckout = async (
  form: FormData
): Promise<Transaction> => {
  const transaction = await fetchAPI<Transaction>(
    "/transactions/checkout",
    {
      method: "POST",
      body: form,
    }
  );

  if (!transaction) {
    throw new Error("Checkout failed");
  }

  return transaction;
};

export const getTransactionById = async (
  id: string
): Promise<Transaction> => {
  const transaction = await fetchAPI<Transaction>(
    `/transactions/${id}`
  );

  if (!transaction) {
    throw new Error("Transaction not found");
  }

  return transaction;
};