'use client';
import { useEffect, useState } from 'react';
import GameCard from '@/components/GameCard';
import Wallet from '@/components/Wallet';
import TransactionList from '@/components/TransactionList';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [games, setGames] = useState([]);
  const [wallet, setWallet] = useState({ coins: 0, transactions: [] });
  const router = useRouter();

  useEffect(() => {
    fetch('/api/games').then(res => res.json()).then(setGames);
    fetch('/api/wallet').then(res => res.json()).then(setWallet);
  }, []);

  const handleRecharge = async (amount) => {
    const res = await fetch('/api/wallet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'recharge', amount }),
    });
    const updated = await res.json();
    setWallet(updated);
  };

  const handleJoin = async (gameId) => {
    const res = await fetch('/api/wallet', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ type: 'join', gameId }),
    });

    if (res.ok) {
      const updated = await res.json();
      setWallet(updated);
      router.push(`/game/${gameId}`);
    } else {
      const err = await res.json();
      alert(err.error);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] p-4 sm:p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700">🎮 Mini Game Lobby</h1>
          <p className="text-sm text-gray-600 mt-2">Choose a game and start playing!</p>
        </header>

        {/* Wallet */}
        <section className="bg-white rounded-lg p-6 shadow-md">
          <Wallet coins={wallet.coins} onRecharge={handleRecharge} />
        </section>

        {/* Game Grid */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Available Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {games.map((game) => (
              <GameCard key={game.id} game={game} onJoin={handleJoin} />
            ))}
          </div>
        </section>

        {/* Transactions */}
        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Recent Transactions</h2>
          <TransactionList transactions={wallet.transactions} />
        </section>
      </div>
    </main>
  );
}
