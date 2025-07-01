import { Coins, Users } from 'lucide-react';

export default function GameCard({ game, onJoin, canJoin }) {
  const getGameIcon = (name) => {
    if (name.toLowerCase().includes('snake')) return '🐍';
    if (name.toLowerCase().includes('challenge')) return '🎯';
    if (name.toLowerCase().includes('connect')) return '🔗';
    if (name.toLowerCase().includes('ladder')) return '🪜';
    return '🎮';
  };

  const getGameDescription = (name) => {
    if (name.toLowerCase().includes('snake')) return 'Classic board game with dice rolls';
    if (name.toLowerCase().includes('challenge')) return 'Test your skills and connect with players';
    return 'Exciting multiplayer experience';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-5 border border-gray-200 hover:border-blue-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl p-2 bg-blue-50 rounded-lg">
            {getGameIcon(game.name)}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg leading-tight">{game.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{getGameDescription(game.name)}</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-3 mb-5">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Coins className="w-4 h-4 text-amber-500" />
            <span>Entry Fee</span>
          </div>
          <span className="font-semibold text-gray-900 bg-amber-50 px-2 py-1 rounded text-xs">
            {game.entry} coins
          </span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 h-4 text-green-500" />
            <span>Players Online</span>
          </div>
          <span className="font-semibold text-gray-900 bg-green-50 px-2 py-1 rounded text-xs">
            {game.players} active
          </span>
        </div>
      </div>
      
      <button
        onClick={() => onJoin(game.id)}
        disabled={!canJoin}
        className={`w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 ${
          canJoin
            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        {canJoin ? 'Join Game' : 'Insufficient Coins'}
      </button>
    </div>
  );
}