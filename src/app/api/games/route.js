import { games } from '../../../lib/db';



export function GET() {
  return Response.json(games);
}
