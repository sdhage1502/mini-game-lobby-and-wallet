import { wallet, games } from '../../../lib/db';

export async function GET() {
  return Response.json(wallet);
}

export async function POST(req) {
  const body = await req.json();
  const { type, amount, gameId } = body;

  if (type === 'recharge') {
    wallet.coins += amount;
    wallet.transactions.unshift({
      id: Date.now(),
      type: 'credit',
      amount,
      description: `Recharged ${amount} coins`,
    });
  }

  if (type === 'join') {
    const game = games.find((g) => g.id === gameId);
    if (!game) return new Response(JSON.stringify({ error: 'Game not found' }), { status: 404 });

    if (wallet.coins >= game.entry) {
      wallet.coins -= game.entry;
      wallet.transactions.unshift({
        id: Date.now(),
        type: 'debit',
        amount: game.entry,
        description: `Joined ${game.name}`,
      });
    } else {
      return new Response(JSON.stringify({ error: 'Insufficient coins' }), { status: 400 });
    }
  }

  return Response.json(wallet);
}