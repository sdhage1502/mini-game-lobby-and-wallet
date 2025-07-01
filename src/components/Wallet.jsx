import { Coins, Plus } from 'lucide-react';

export default function Wallet({ coins, onRecharge }) {
  const rechargeOptions = [
    { amount: 10, label: 'Starter', color: 'border-green-200 hover:border-green-300 hover:bg-green-50 text-green-700' },
    { amount: 25, label: 'Popular', color: 'border-blue-200 hover:border-blue-300 hover:bg-blue-50 text-blue-700', popular: true },
    { amount: 50, label: 'Value', color: 'border-purple-200 hover:border-purple-300 hover:bg-purple-50 text-purple-700' },
    { amount: 100, label: 'Premium', color: 'border-amber-200 hover:border-amber-300 hover:bg-amber-50 text-amber-700' }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="p-3 bg-blue-50 rounded-lg">
            <Coins className="w-8 h-8 text-blue-600" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-medium text-gray-700">Wallet Balance</h3>
            <div className="text-3xl font-bold text-gray-900">{coins}</div>
            <div className="text-sm text-gray-500">coins available</div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-700 text-center">Quick Recharge</h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {rechargeOptions.map(({ amount, label, color, popular }) => (
            <button
              key={amount}
              onClick={() => onRecharge(amount)}
              className={`relative py-4 px-3 rounded-lg border font-medium text-sm transition-all duration-200 ${color}`}
            >
              {popular && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                  ⭐
                </span>
              )}
              <div className="flex items-center justify-center gap-1">
                <Plus className="w-4 h-4" />
                <span className="font-semibold">{amount}</span>
              </div>
              <div className="text-xs opacity-75 mt-1">{label}</div>
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500 text-center mt-3">
          💡 Tip: Buy more coins to unlock premium games and features
        </p>
      </div>
    </div>
  );
}