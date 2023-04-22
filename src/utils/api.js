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
