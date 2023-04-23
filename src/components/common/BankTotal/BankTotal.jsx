import { useEffect } from "react";
import { useTransactions } from "../../../hooks/useTransactions";
import { humanReadableAmount } from "../../../utils/formattingHelpers";

const BankTotal = () => {
  const { transactions } = useTransactions();
  let total = 0;
  transactions.forEach((transaction) => {
    if (transaction.transaction_type === "deposit") {
      total += transaction.amount;
    } else if (transaction.transaction_type === "withdrawal") {
      total -= transaction.amount;
    }
  });

  useEffect(() => {
    document.title = `Bank Total: ${humanReadableAmount(total)}`;
  }, [transactions, total]);

  return (
    <div className="container mx-auto px-4 flex justify-center">
      <h1 className="text-4xl">Bank Total {humanReadableAmount(total)}</h1>
    </div>
  );
};

export default BankTotal;
