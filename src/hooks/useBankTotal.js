import { useState, useEffect } from "react";
// import { useTransactions } from "./useTransactions";
import { fetchTransactions } from "../utils/api";
import { calculateBankTotal } from "../utils/formattingHelpers";

const useBankTotal = () => {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);

  const updateTransactions = async () => {
    setTransactions(await fetchTransactions());
  };

  useEffect(() => {
    const fetchAPI = async () => {
      await updateTransactions();
    };

    const newTotal = calculateBankTotal(transactions);

    fetchAPI();
    setTotal(newTotal);
  }, [transactions]);

  return total;
};

export default useBankTotal;
