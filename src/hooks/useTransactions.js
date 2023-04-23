import { useState, useEffect } from "react";
import { fetchTransactions } from "../utils/api";

export const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  const updateTransactions = async () => {
    setTransactions(await fetchTransactions());
  };

  useEffect(() => {
    const fetchAPI = async () => {
      await updateTransactions();
    };

    fetchAPI();
  }, []);

  return { transactions, updateTransactions };
};
