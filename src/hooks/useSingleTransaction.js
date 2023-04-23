import { useState, useEffect } from "react";
import { fetchTransaction } from "../utils/api";

export const useSingleTransaction = (index) => {
  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setTransaction(await fetchTransaction(index));
    };

    fetchAPI();
  }, [index]);

  return transaction;
};
