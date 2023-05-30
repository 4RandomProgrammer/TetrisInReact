import "./Tetris.css";
//Components
import Board from "./Board"

//Hooks
import {useBoard} from "../hooks/useBoard"

const Tetris = ({rows,columns,setGameOver}) => {
    
    return (
        <Board/>
    );
}

export default Tetris;