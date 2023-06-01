import React from "react";

import "./GameStats.css"


const GameStats = ({gameStats}) => {
    const { level, points, linesCompleted, linesPerLevel} = gameStats;
    const linesToLevel = linesPerLevel - linesCompleted;
    return (
        <ul className="GameStats GameStats__right">
            <li>Level</li>
            <li className="value">{level}</li>
            <li>Lines to level</li>
            <li className="value">{linesToLevel}</li>
            <li>Points</li>
            <li className="value">{points}</li>
        </ul>
    );
}

//React memo is used for when something only needs to be updated when its changed.
export default React.memo(GameStats);
    