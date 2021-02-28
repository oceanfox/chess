import React, {useEffect, useState} from "react";
import Chessboard from "chessboardjsx";
import {ChessInstance, ShortMove} from "chess.js";
import {useToasts} from "react-toast-notifications";

export const MainChess = () => {
  const Chess = require("chess.js");
  const [chess, setChess] = useState<ChessInstance>(new Chess());
  const [fen, setFen] = useState(chess.fen());
  const {addToast} = useToasts()

  useEffect(() => {
    if (chess.game_over()) {
      addToast('Game Over', {
        appearance: 'error',
        autoDismiss: true,
      })
    }
    if (chess.in_stalemate()) {
      addToast('Stalemate', {
        appearance: 'error',
        autoDismiss: false,
      })
    }

    if(chess.in_check()) {
      addToast('You have a Check', {
        appearance: 'error',
        autoDismiss: false,
      })
    }
  }, [chess, fen]);


  const handleMove = (move: ShortMove) => {
    if (chess.move(move)) {
      console.log('chess',move.to);
      setTimeout(() => {
        const moves = chess.moves();

        if (moves.length > 0) {
          const computerMove = moves[Math.floor(Math.random() * moves.length)];
          chess.move(computerMove);
          console.log('computer move to ',computerMove);
          setFen(chess.fen());
        }
      }, 300);

      setFen(chess.fen());
    }
  };

  const handleClear = () => {
    setChess(new Chess())
    setFen(chess.fen());
  };
  {
    return <div
      className="container">
      <h1>Random Chess</h1>

      <Chessboard
        width={900}
        position={fen}
        onDrop={(move: any) =>
          handleMove({
            from: move.sourceSquare,
            to: move.targetSquare,
            promotion: "q",
          })}
      />
      <button type="submit" onClick={handleClear} className="btn btn__primary btn__lg">
        Clear
      </button>
    </div>;
  }
}
