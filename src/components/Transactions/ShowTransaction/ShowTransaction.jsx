import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchTransaction } from "../../../utils/api";
import CustomButton from "../../common/CustomButton/CustomButton";
import { firstLetterUppercase, humanReadableDate, humanReadableAmount } from "../../../utils/formattingHelpers";

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
        {transaction.id ? (
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
                <td className="px-4 py-2">{humanReadableDate(transaction.date)}</td>
                <td className="px-4 py-2">{humanReadableAmount(transaction.amount)}</td>
                <td className="px-4 py-2">{firstLetterUppercase(transaction.from)}</td>
                <td className="px-4 py-2">{firstLetterUppercase(transaction.category)}</td>
                <td className="px-4 py-2">{transaction.transaction_type}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="py-4">
        <CustomButton textContent={"Edit"} />
        <CustomButton textContent={"Delete"} />
      </div>
    </div>
  );
};

export default ShowTransaction;
