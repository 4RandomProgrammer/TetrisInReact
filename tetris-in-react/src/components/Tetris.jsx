import "./Tetris.css";
//Components
import Board from "./Board"
import GameStats from "./GameStats";

//Hooks
import {useBoard} from "../hooks/useBoard"
import { useGameStats } from "../hooks/useGameStats";

const Tetris = ({rows,columns,setGameOver}) => {
    const[gameStats, addLinesCleared] = useGameStats();
    const [board, setBoard] = useBoard({rows,columns});

    const player = {tetrominos: []};

    return (
        <div className="Tetris">
            <Board board={board}/>
            <GameStats gameStats={gameStats}/>
            <Previews tetrominos={player.tetrominos} />
        </div>
    );
}

export default Tetris;