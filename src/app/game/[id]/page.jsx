'use client';
import Link from 'next/link';

export default function GameScreen({ params }) {
  const { id } = params;
  return (
    <div className="min-h-screen flex items-center justify-center flex-col text-center bg-gray-100 px-4">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">🎮 Game #{id}</h2>
      <p className="text-lg text-gray-700 mb-6">This is a placeholder game screen.</p>
      <Link
        href="/"
        className="text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700"
      >
        ← Back to Lobby
      </Link>
    </div>
  );
}