import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTransactions } from "../../../utils/api";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setTransactions(await fetchTransactions());
    };

    fetchAPI();
  }, []);

  return (
    <div className="container">
      <div className="py-4">
        <h1>Transactions</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/transactions/${transaction.id}`}>
                    View
                  </Link>
                  <Link className="btn btn-outline-primary mr-2" to={`/transactions/edit/${transaction.id}`}>
                    Edit
                  </Link>
                  <Link className="btn btn-danger" to={`/transactions/delete/${transaction.id}`}>
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
