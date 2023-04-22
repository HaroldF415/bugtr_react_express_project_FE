import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchTransaction } from "../../../utils/api";

const ShowTransaction = () => {
  const [transaction, setTransaction] = useState({});
  const { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransactionIndex = async () => {
      setTransaction(await fetchTransaction(index));
    };

    fetchTransactionIndex();
  }, [index]);

  return (
    <div className="showTransaction flex flex-col items-center justify-center">
      <div className="py-4">
        <h1 className="text-2xl font-bold mb-4">Budgtr Transaction</h1>
        <table className="table-auto w-full">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">From</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 text-sm">{transaction.id}</td>
              <td className="px-4 py-2">{transaction.date}</td>
              <td className="px-4 py-2">{transaction.amount}</td>
              <td className="px-4 py-2">{transaction.from}</td>
              <td className="px-4 py-2">{transaction.category}</td>
              <td className="px-4 py-2">{transaction.transaction_type}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="py-4">
        <button className="border border-teal-800 hover:border-teal-600 rounded py-4 px-8 bg-transparent font-bold text-teal-800 hover:text-teal-600 transition duration-500 ">Edit</button>
        <button className="border border-teal-800 hover:border-teal-600 rounded py-4 px-8 bg-transparent font-bold text-teal-800 hover:text-teal-600 transition duration-500 ">Delete</button>
      </div>
    </div>
  );
};

export default ShowTransaction;
