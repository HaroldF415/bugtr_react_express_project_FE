import useBankTotal from "../../../hooks/useBankTotal";
import { humanReadableAmount, setBankTotalColor } from "../../../utils/formattingHelpers";

const BankTotal = () => {
  const total = useBankTotal();

  return (
    <div className="container mx-auto px-4 flex justify-center">
      <h1 className={`text-4xl ${setBankTotalColor(total)}`}>Bank Total {humanReadableAmount(total)}</h1>
    </div>
  );
};

export default BankTotal;
