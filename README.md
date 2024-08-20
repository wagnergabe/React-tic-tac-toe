This is a simple **Tic-Tac-Toe** game built using **React**. The app allows two players to compete, taking turns to mark squares on a 3x3 grid. The first player to align three symbols in a row, column, or diagonal wins the game.

## Features

- **Player Turn Tracking**: The game keeps track of the active player and alternates turns between Player 1 (X) and Player 2 (O).
- **Dynamic Game Board**: Players can click on any available square on the 3x3 grid to mark their symbol.
- **Win Condition**: The app checks for a winner after each turn, based on pre-defined winning combinations.
- **Draw Condition**: If all 9 squares are filled without a winner, the game declares a draw.
- **Game Over Screen**: The game announces the winner or a draw and offers a restart option.
- **Player Name Customization**: Players can change their display names.

## Components

- **Player.jsx**: Renders the player names and highlights the active player.
- **GameBoard.jsx**: Renders the game board and handles square selections.
- **Log.jsx**: Displays the history of turns taken during the game.
- **GameOver.jsx**: Displays the game-over message and offers a button to restart the game.
- **App.js**: The main component that manages the state of the game, including player names, game turns, and checks for a winner or draw.
