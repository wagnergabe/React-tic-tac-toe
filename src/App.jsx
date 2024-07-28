import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';

function App() {
  
  return (
    <main>
      <h1>React Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players">
         <Player name="Player 1" symbol="X"/>
         <Player name="Player 2" symbol="O"/>
        </ol>
        <GameBoard />
      </div>
    </main>
  )
}

export default App

