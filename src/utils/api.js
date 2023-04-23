import axios from "axios";

const API = process.env.REACT_APP_API_URL || "https://bugtr-be.onrender.com";

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
    const response = await axios.post(`${API}/transactions`, transaction);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const deleteTransaction = async (index) => {
  try {
    await axios.delete(`${API}/transactions/${index - 1}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateTransaction = async (index, transaction) => {
  try {
    const response = await axios.put(`${API}/transactions/${index}`, transaction);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};
