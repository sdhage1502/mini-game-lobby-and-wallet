export default function GameCard({ game, onJoin }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between h-full hover:shadow-lg transition">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-1">{game.name}</h2>
        <p className="text-sm text-gray-600">🎟 Entry: <strong>{game.entry} coins</strong></p>
        <p className="text-sm text-gray-600">👥 Players: {game.players}</p>
      </div>
      <button
        onClick={() => onJoin(game.id)}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
      >
        Join Game
      </button>
    </div>
  );
}
