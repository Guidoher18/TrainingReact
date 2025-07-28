import { useEffect, useState } from "react";
import './Styles/App.css'
import { Cell } from './Cell';
import { TURNS } from '../constants';
import { isWinner } from '../logic/board';
import confetti from 'canvas-confetti';
import { getLocalStorage, removeLocalStorage, saveLocalStorage } from '../logic/localStorage';

function App() {
  //#region Hooks: UseState
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = getLocalStorage('board');
    if (boardFromLocalStorage) {
      return JSON.parse(boardFromLocalStorage);
    }

    return Array(9).fill(null);
  });

  const [availableGame, setAvailableGame] = useState(true);
  const [availableCells, setAvailableCells] = useState(9);

  const [turn, setTurn] = useState(() => { 
        const boardFromLocalStorage = getLocalStorage('turn');
    
    if (boardFromLocalStorage) {
      return JSON.parse(boardFromLocalStorage);
    }

    return TURNS.X;
  });

  const [winnerCells, setWinnerCells] = useState([] as number[]);
  // #endregion

  // #region Hooks: UseEffect
  useEffect(() => {
    saveLocalStorage('turn', turn);
    saveLocalStorage('board', board);
  }, [turn, board]);
  // #endregion
  
  const reloadBoard = () => {
    setBoard(Array(9).fill(null));
    setAvailableCells(9);
    setTurn(TURNS.X);
    setAvailableGame(true);
    setWinnerCells([]);
    removeLocalStorage(['board', 'turn']);
  }

  const updateBoard = (indexCell: number) => {
    const gameOver = (msg: string = "Juego Terminado") =>{ 
      setTurn(msg);
      setAvailableGame(false);
    }

    const isEmptyCell = board[indexCell] === null;

    if (availableGame && availableCells > 0 && isEmptyCell) {
      if (availableCells === 1) {
        gameOver();
      }
      else { 
        // Change Turn
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);
      }
        
      // Update Board
      const newBoard = [...board];
      newBoard[indexCell] = turn;
      setBoard(newBoard);

      // Update Rest
      setAvailableCells(availableCells - 1);
      const winner = isWinner(newBoard);

      if (winner !== null) {
        gameOver(turn + ' es el ganador');
        confetti();
        setWinnerCells(winner);
      }
    }
  }

  return (
    <>
      <h1>TA-TE-TI</h1>
      <br/>
      <div className="turn__div">
        <h2 className='turn__h2'>Turno:
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className='turn__h2-span'>{turn}</span>
        </h2>
        <button className="turn__button-reload" onClick={reloadBoard}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </button>
      </div>
      <br/>
      <div className="board">
        {board.map((x, index) => (<Cell key={index} updateBoard={updateBoard} winnerCells={winnerCells} index={index}>{x}</Cell>))}
      </div>
    </>
  )
}

export default App
