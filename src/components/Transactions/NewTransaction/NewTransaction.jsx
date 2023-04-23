import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import TransactionForm from "../TransactionForm/TransactionForm";
import { createTransaction, fetchTransactions } from "../../../utils/api";

const NewTransaction = () => {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    id: "",
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
    transaction_type: "",
  });

  const handleTextChange = (event) => {
    setTransaction({
      ...transaction,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = uuidv4();
    const newTransaction = { ...transaction, id };

    try {
      await createTransaction(newTransaction);
      const transactions = await fetchTransactions();
      navigate(`/transactions/${transactions.length - 1}`);
    } catch (error) {
      console.log("Something went wrong: ", error);
    }
  };

  return <TransactionForm transaction={transaction} handleSubmit={handleSubmit} handleTextChange={handleTextChange} />;
};

export default NewTransaction;
