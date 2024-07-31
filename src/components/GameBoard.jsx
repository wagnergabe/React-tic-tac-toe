const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]


function GameBoard({ onSelectSquare, turns }) {

    let gameBoard = initialGameBoard;

    for(const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // const handleSelectSquare = (row, colIndex) => {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[row][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     })

    //     onSelectSquare();
    // }

    return (
        <ol id = "game-board">
        {gameBoard.map((row, index) => (
        <li key={index}>
            <ol>
                {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        <button onClick = {() => onSelectSquare(index, colIndex)}>{playerSymbol}</button>
                        </li>))}
            </ol>
            </li>
        ))}
        </ol>
    );
}

export default GameBoard;