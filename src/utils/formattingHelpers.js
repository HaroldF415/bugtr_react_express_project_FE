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
