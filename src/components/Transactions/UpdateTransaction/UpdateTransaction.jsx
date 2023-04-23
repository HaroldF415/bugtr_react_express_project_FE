import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useSingleTransaction } from "../../../hooks/useSingleTransaction";
import { updateTransaction } from "../../../utils/api";
import TransactionForm from "../TransactionForm/TransactionForm";

const UpdateTransaction = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const singleTransaction = useSingleTransaction(index);
  const [transaction, setTransaction] = useState({
    id: "",
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
    transaction_type: "",
  });

  useEffect(() => {
    if (singleTransaction) {
      setTransaction(singleTransaction);
    }
  }, [singleTransaction]);

  const handleTextChange = (event) => {
    setTransaction({
      ...transaction,
      [event.target.name]: event.target.value,
    });
  };

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
