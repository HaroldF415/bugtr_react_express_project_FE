const TransactionForm = ({ transaction, handleSubmit, handleTextChange }) => {
  return (
    <div className="flex flex-col px-24">
      <div className="py-4 px-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="item_name" className="font-bold text-sm mb-1">
              Item Name
            </label>
            <input type="text" id="item_name" name="item_name" value={transaction.item_name} onChange={handleTextChange} className="border p-2 rounded" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount" className="font-bold text-sm mb-1">
              Amount
            </label>
            <input type="number" id="amount" name="amount" value={transaction.amount} onChange={handleTextChange} className="border p-2 rounded" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="date" className="font-bold text-sm mb-1">
              Date
            </label>
            <input type="date" id="date" name="date" value={transaction.date} onChange={handleTextChange} className="border p-2 rounded" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="from" className="font-bold text-sm mb-1">
              From
            </label>
            <input type="text" id="from" name="from" value={transaction.from} onChange={handleTextChange} className="border p-2 rounded" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="category" className="font-bold text-sm mb-1">
              Category
            </label>
            <input type="text" id="category" name="category" value={transaction.category} onChange={handleTextChange} className="border p-2 rounded" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="transaction_type" className="font-bold text-sm mb-1">
              Transaction Type
            </label>
            <select id="transaction_type" name="transaction_type" value={transaction.transaction_type} onChange={handleTextChange} className="border p-2 rounded">
              <option value="">Select Transaction Type</option>
              <option value="withdrawal">Withdrawal</option>
              <option value="deposit">Deposit</option>
            </select>
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default TransactionForm;
