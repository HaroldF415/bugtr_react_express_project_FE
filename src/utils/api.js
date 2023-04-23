import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export const fetchTransactions = async () => {
  try {
    const response = await axios.get(`${API}/transactions`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchTransaction = async (index) => {
  try {
    const response = await axios.get(`${API}/transactions/${index}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const createTransaction = async (transaction) => {
  try {
    await axios.post(`${API}/transactions`, transaction);
  } catch (error) {
    console.log(error);
    return {};
  }
};
