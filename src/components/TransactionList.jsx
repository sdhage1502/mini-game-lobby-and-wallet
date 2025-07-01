export default function TransactionList({ transactions }) {
  return (
    <ul className="space-y-3 text-sm text-gray-700 max-h-60 overflow-y-auto">
      {transactions.length === 0 && (
        <li className="text-center text-gray-400 italic">No transactions yet</li>
      )}
      {transactions.map((tx) => (
        <li key={tx.id} className="border-b pb-2 flex justify-between items-center">
          <div>
            <span className={`font-semibold ${tx.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
              {tx.type === 'credit' ? '+' : '-'}{tx.amount}
            </span>{' '}
            <span>— {tx.description}</span>
          </div>
          <span className="text-xs text-gray-400">{new Date(tx.id).toLocaleTimeString()}</span>
        </li>
      ))}
    </ul>
  );
}