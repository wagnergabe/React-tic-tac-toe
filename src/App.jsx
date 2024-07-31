import { useState } from 'react';

import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';

function App() {
    const [gameTurns, setGameTurns] = useState([])
    const [activePlayer, setActivePlayer] = useState("X");

    function handleSelectSquare(rowIndex, colIndex) {
      setActivePlayer((currentPlayer) => currentPlayer === "X" ? "O" : "X" )
      setGameTurns(prevTurns => {
        let currentPlayer = 'X';

        if ( prevTurns.length > 0 && prevTurns[0].player === 'X') {
          currentPlayer = 'O';
        }

        const updatedTurns = [{ square: { row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns,
        ]

        return updatedTurns;
      })
    }
  return (
    <main>
      <h1>React Tic-Tac-Toe</h1>
      <div id="game-container" className="highlight-player">
        <ol id="players">
         <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
         <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare = {handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App

