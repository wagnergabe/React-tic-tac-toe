import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]


function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    const handleSelectSquare = (row, colIndex) => {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[row][colIndex] = 'X';
            return updatedBoard;
        })
    }

    return (
        <ol id = "game-board">
        {gameBoard.map((row, index) => (
        <li key={index}>
            <ol>
                {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        <button onClick = {() => handleSelectSquare(index, colIndex)}>{playerSymbol}</button>
                        </li>))}
            </ol>
            </li>
        ))}
        </ol>
    );
}

export default GameBoard;