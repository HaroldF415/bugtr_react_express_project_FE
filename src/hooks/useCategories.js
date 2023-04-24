import { useState, useEffect } from "react";
import { fetchTransactions } from "../utils/api";
import { firstLetterUppercase } from "../utils/formattingHelpers";

const useCategories = (transaction) => {
  const [transactions, setTransactions] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      const transactions = await fetchTransactions();
      setTransactions(transactions);
    };

    getTransactions();
  }, [transaction]);

  useEffect(() => {
    const categoriesArr = transactions.reduce((acc, transaction) => {
      acc.add(firstLetterUppercase(transaction.category));
      return acc;
    }, new Set());

    setUniqueCategories([...categoriesArr]);
  }, [transactions]);

  return uniqueCategories;
};

export default useCategories;
