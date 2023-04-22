import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTransactions } from "../../../utils/api";

const firstLetterUppercase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const humanReadableDate = (date) => {
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Transaction = ({ transaction, index }) => {
  return (
    <tr className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
      <th className="px-4 py-2" scope="row">
        {index + 1}
      </th>
      <td className="px-4 py-2">{humanReadableDate(transaction.date)}</td>
      <td className="px-4 py-2">{firstLetterUppercase(transaction.from)}</td>
      <td className="px-4 py-2">$ {transaction.amount}.00</td>
      <td className="px-4 py-2">{firstLetterUppercase(transaction.category)}</td>
      <td className="px-4 py-2">
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-1" to={`/transactions/${transaction.id}`}>
          View
        </Link>
        <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-1" to={`/transactions/edit/${transaction.id}`}>
          Edit
        </Link>
        <Link className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" to={`/transactions/delete/${transaction.id}`}>
          Delete
        </Link>
      </td>
    </tr>
  );
};

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setTransactions(await fetchTransactions());
    };

    fetchAPI();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="py-4">
        <h1 className="text-2xl font-bold mb-4">Transactions</h1>
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
    </div>
  );
};

export default Transactions;
