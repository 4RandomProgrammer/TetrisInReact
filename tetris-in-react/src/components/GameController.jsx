import "./GameController.css"

//Utils
import {Action, actionForKey} from "../utils/Input"

const GameController = ({board,  gameStats, player, setGameOver,setPlayer}) => {
    const onKeyDown = ({code}) => { 
        const action = actionForKey(code);
        console.log("Aqui")

        if (action === Action.Quit){
            setGameOver(true);
        }
    }

    const onKeyUp = ({code}) => { 
        console.log(`OnKeyDown ${code}`); 
    }


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
    