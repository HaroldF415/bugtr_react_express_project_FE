import { useState } from "react";

export const useTransactionForm = (initialTransaction) => {
  const [transaction, setTransaction] = useState(initialTransaction);

  const handleTextChange = (event) => {
    setTransaction({
      ...transaction,
      [event.target.name]: event.target.value,
    });
  };

  return {
    transaction,
    handleTextChange,
  };
};
