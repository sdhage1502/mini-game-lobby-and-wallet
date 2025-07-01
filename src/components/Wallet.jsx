export default function Wallet({ coins, onRecharge }) {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold text-indigo-800 mb-2">💰 Wallet Balance: {coins} coins</h3>
      <div className="flex flex-wrap justify-center gap-3 mt-2">
        {[10, 20, 50].map((amt) => (
          <button
            key={amt}
            onClick={() => onRecharge(amt)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow text-sm"
          >
            +{amt} coins
          </button>
        ))}
      </div>
    </div>
  );
}
