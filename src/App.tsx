import React, {useEffect, useState} from "react";
import "./App.css";
import Chessboard from "chessboardjsx";
import { ChessInstance, ShortMove } from "chess.js";

const Chess = require("chess.js");

const App: React.FC = () => {

  const [chess, setChess] = useState<ChessInstance>(
    new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
  );
  const [fen, setFen] = useState(chess.fen());

  useEffect(() => {
    console.log('chess called',chess);
  }, [chess, fen]);


  const handleMove = (move: ShortMove) => {
    if (chess.move(move)) {
      setTimeout(() => {
        const moves = chess.moves();

        if (moves.length > 0) {
          const computerMove = moves[Math.floor(Math.random() * moves.length)];
          chess.move(computerMove);
          setFen(chess.fen());
        }
      }, 300);

      setFen(chess.fen());
    }
  };

  const handleClear = () => {
    console.log('called this one',);
    setChess(chess)
    // chess.clear();
    setFen(chess.fen());
  };

  return (
    <div className="container">
      <h1>Random Chess</h1>

      <Chessboard
        width={900}
        position={fen}
        onDrop={(move) =>
          handleMove({
            from: move.sourceSquare,
            to: move.targetSquare,
            promotion: "q",
          })
        }
      />
      <button type="submit" onClick={handleClear} className="btn btn__primary btn__lg">
        Clear
      </button>
    </div>
  );
};

export default App;
