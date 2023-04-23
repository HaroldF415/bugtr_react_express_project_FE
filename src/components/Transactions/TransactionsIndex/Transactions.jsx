import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTransactions } from "../../../hooks/useTransactions";
import { firstLetterUppercase, humanReadableDate, humanReadableAmount } from "../../../utils/formattingHelpers";

const Transaction = ({ transaction, index }) => {
  return (
    <tr className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
      <th className="px-4 py-2" scope="row">
        {index + 1}
      </th>
      <td className="px-4 py-2">{humanReadableDate(transaction.date)}</td>
      <td className="px-4 py-2">{firstLetterUppercase(transaction.from)}</td>
      <td className="px-4 py-2">{humanReadableAmount(transaction.amount)}</td>
      <td className="px-4 py-2">{firstLetterUppercase(transaction.category)}</td>
      <td className="px-4 py-2">
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-1" to={`/transactions/${index}`}>
          View
        </Link>
        {/* <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-1" to={`/transactions/edit/${transaction.id}`}>
          Edit
        </Link>
        <Link className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" to={`/transactions/delete/${transaction.id}`}>
          Delete
        </Link> */}
      </td>
    </tr>
  );
};

const Transactions = () => {
  const { transactions } = useTransactions();
  const [deletedTransaction, setDeletedTransaction] = useState(null);

  useEffect(() => {
    const deletedTransactionID = sessionStorage.getItem("deletedTransactionID");
    if (deletedTransactionID) {
      setDeletedTransaction(deletedTransactionID);
      sessionStorage.removeItem("deletedTransactionID");
    }
  }, []);

  let total = 0;
  transactions.forEach((transaction) => {
    if (transaction.transaction_type === "deposit") {
      total += transaction.amount;
    } else if (transaction.transaction_type === "withdrawal") {
      total -= transaction.amount;
    }
  });

  return (
    <div className="container mx-auto px-4">
      <div className="py-4">
        <h1 className="text-4xl">Bank Account Total: {humanReadableAmount(total)}</h1>
        <br />
        <h2 className="text-3xl font-bold mb-4">Transactions</h2>
        <table className="table-auto w-full">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">From</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <Transaction key={transaction.id} transaction={transaction} index={index} />
            ))}
          </tbody>
        </table>
      </div>
      <h3>{deletedTransaction && `The transactions with ID: ${deletedTransaction} has been removed from our records.`}</h3>
    </div>
  );
};

export default Transactions;
