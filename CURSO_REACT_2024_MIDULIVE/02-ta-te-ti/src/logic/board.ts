import { WINNER } from "../constants";

export const isWinner = (board: string[]) => {
  for (let i = 0; i < WINNER.length; i++) {
    const combination = WINNER[i];
    const [a, b, c] = combination;
    const data = [board[a], board[b], board[c]];

    if (data.some((x) => x === null)) continue;

    if (data[0] === data[1] && data[1] === data[2]) {
      return [a, b, c];
    }
  }

  return null;
};
