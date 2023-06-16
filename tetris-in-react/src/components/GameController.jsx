import "./GameController.css"

//Utils
import {Action, actionForKey} from "../utils/Input"
import {playerController} from "../utils/PlayerController"

const GameController = ({board,  gameStats, player, setGameOver,setPlayer}) => {
    const onKeyDown = ({code}) => {
        const action = actionForKey(code);
        handleInput({action})
    }

    const onKeyUp = ({code}) => { 
        const action = actionForKey(code);

        if (action === Action.Quit){
            setGameOver(true);
        }
    }

    const handleInput = ({ action }) => {
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver
        });
    };


    return (
        <input
            className="GameController"
            type="text"
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            autoFocus
        />
    )
}



//React memo is used for when something only needs to be updated when its changed.
export default GameController;
    