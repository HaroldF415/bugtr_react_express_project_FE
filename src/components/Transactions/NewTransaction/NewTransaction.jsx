import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useTransactionForm } from "../../../hooks/useTransactionForm";
import TransactionForm from "../TransactionForm/TransactionForm";
import { createTransaction, fetchTransactions } from "../../../utils/api";

const NewTransaction = () => {
  const navigate = useNavigate();
  const initialTransaction = {
    id: "",
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
    transaction_type: "",
  };

  const { transaction, handleTextChange } = useTransactionForm(initialTransaction);

  const handleSubmit = async (event, newCategory) => {
    event.preventDefault();
    const id = uuidv4();
    const updatedTransaction = {
      ...transaction,
      amount: parseFloat(transaction.amount),
      category: newCategory ? newCategory : transaction.category,
      id,
    };

    try {
      await createTransaction(updatedTransaction);
      const transactions = await fetchTransactions();
      navigate(`/transactions/${transactions.length - 1}`);
    } catch (error) {
      console.log("Something went wrong: ", error);
    }
  };

  return <TransactionForm transaction={transaction} handleSubmit={handleSubmit} handleTextChange={handleTextChange} />;
};

export default NewTransaction;
