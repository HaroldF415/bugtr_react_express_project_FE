export const firstLetterUppercase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const humanReadableDate = (date) => {
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const humanReadableAmount = (amount) => {
  const newAmount = parseInt(amount);
  return newAmount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const setBankTotalColor = (total) => {
  if (total < 0) {
    return "text-red-600";
  } else if (total >= 0 && total <= 100) {
    return "text-yellow-600";
  } else {
    return "text-green-600";
  }
};

export const calculateBankTotal = (transactions) => {
  let total = 0;
  transactions.forEach((transaction) => {
    if (transaction.transaction_type === "deposit") {
      total += transaction.amount;
    } else if (transaction.transaction_type === "withdrawal") {
      total -= transaction.amount;
    }
  });
  return total;
};
