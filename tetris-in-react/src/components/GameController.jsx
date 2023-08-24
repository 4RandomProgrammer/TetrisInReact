import "./GameController.css"

//Utils
import {Action, actionForKey, actionIsDrop} from "../utils/Input"
import {playerController} from "../utils/PlayerController"
import { setHighScore } from "../utils/Highscore"

import { useInterval } from "../hooks/useInterval"
import { useDropTime } from "../hooks/useDropTime"

const GameController = ({board,  gameStats, player, setGameOver,setPlayer}) => {

    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
        gameStats
    });

    useInterval( () => {
        handleInput({action: Action.SlowDrop});
    }, dropTime);

    const onKeyDown = ({code}) => {
        const action = actionForKey(code);
        if (action == Action.Pause){
            if (dropTime) {
                pauseDropTime();
            } else {
                resumeDropTime();
            }
        } else if (action === Action.Quit){
            setHighScore({highscore:gameStats.points});
            setGameOver(true);
        } else {
            handleInput({action});
        }
    }

    const onKeyUp = ({code}) => { 
        const action = actionForKey(code);
        if(actionIsDrop(action)) resumeDropTime();
        
    }

    const handleInput = ({ action }) => {
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver,
            points: gameStats.points
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
    