import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTransaction } from "../../../utils/api";

const NewTransaction = () => {
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

  const handleSubmit = (event) => {};

  return (
    <div className="newTransaction">
      <form onSubmit={handleSubmit}>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default NewTransaction;
