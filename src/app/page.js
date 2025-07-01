'use client';
import { useEffect, useState } from 'react';
import GameCard from '@/components/GameCard';
import Wallet from '@/components/Wallet';
import TransactionList from '@/components/TransactionList';
import { useRouter } from 'next/navigation';
import { Gamepad2, TrendingUp, Clock } from 'lucide-react';
import { games, wallet as initialWallet } from '@/lib/db';

export default function Home() {
  const [gamesState, setGames] = useState(games);
  const [wallet, setWallet] = useState(initialWallet);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setGames(games);
    setWallet(initialWallet);
    setLoading(false);
  }, []);

  const handleRecharge = async (amount) => {
    const newWallet = { ...wallet, coins: wallet.coins + amount };
    newWallet.transactions.unshift({
      id: Date.now(),
      type: 'credit',
      amount,
      description: `Recharged ${amount} coins`,
    });
    setWallet(newWallet);
    // Update the global wallet in db.js
    initialWallet.coins = newWallet.coins;
    initialWallet.transactions = newWallet.transactions;
  };

  const handleJoin = async (gameId) => {
    const game = games.find((g) => g.id === gameId);
    if (!game) {
      alert('Game not found');
      return;
    }

    if (wallet.coins >= game.entry) {
      const newWallet = { ...wallet, coins: wallet.coins - game.entry };
      newWallet.transactions.unshift({
        id: Date.now(),
        type: 'debit',
        amount: game.entry,
        description: `Joined ${game.name}`,
      });
      setWallet(newWallet);
      // Update the global wallet in db.js
      initialWallet.coins = newWallet.coins;
      initialWallet.transactions = newWallet.transactions;
      router.push(`/game/${gameId}`);
    } else {
      alert('Insufficient coins');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-600 rounded-lg">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Mini Social App
              </h1>
              <p className="text-gray-600 text-sm sm:text-base mt-1">
                Choose your adventure and start playing!
              </p>
            </div>
          </div>
        </header>

        {/* Wallet Section */}
        <section className="mb-8 sm:mb-12">
          <Wallet coins={wallet.coins} onRecharge={handleRecharge} />
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Games Grid */}
          <section className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Available Games</h2>
              <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                {gamesState.length} games
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {gamesState.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onJoin={handleJoin}
                  canJoin={wallet.coins >= game.entry}
                />
              ))}
            </div>
          </section>

          {/* Transactions Sidebar */}
          <section className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 sticky top-6">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
              </div>
              <TransactionList transactions={wallet.transactions} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}