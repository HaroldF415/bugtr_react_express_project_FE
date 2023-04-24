// import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSingleTransaction } from "../../../hooks/useSingleTransaction";
import { updateTransaction } from "../../../utils/api";
import { useTransactionForm } from "../../../hooks/useTransactionForm";
import TransactionForm from "../TransactionForm/TransactionForm";

const UpdateTransaction = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const singleTransaction = useSingleTransaction(index);
  const { transaction, handleTextChange } = useTransactionForm(singleTransaction);

  // useEffect(() => {
  //   if (singleTransaction) {
  //     setTransaction(singleTransaction);
  //   }
  // }, [singleTransaction]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateTransaction(transaction.id, transaction);
      navigate(`/transactions/${index}`);
    } catch (error) {
      console.log("Something went wrong: ", error);
    }
  };

  return <TransactionForm transaction={transaction} handleTextChange={handleTextChange} handleSubmit={handleSubmit} />;
};

export default UpdateTransaction;
