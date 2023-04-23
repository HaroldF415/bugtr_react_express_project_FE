import { useState, useEffect } from "react";
import { fetchTransactions } from "../utils/api";

export const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setTransactions(await fetchTransactions());
    };

    fetchAPI();
  }, []);

  return transactions;
};
