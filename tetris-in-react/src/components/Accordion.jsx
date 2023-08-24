import { getHighScore } from "../utils/Highscore";
import "./Accordion.css";

import { useState } from "react";

function Accordion() {
    const [selected, setSelected] = useState(null); 

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }
        
        setSelected(i)
    }
    return (
        <div className="wrapper">
            <div className="accordion">
                {
                    data.map((item, i) => (
                        <div className="item" key={i + 1}>
                            <div className="title" onClick={() => toggle(i)}>
                                <h2>{item.title}</h2>
                                <span>{selected === i ? '↑' :'↓'}</span>
                            </div>
                            <div className={selected == i ? 'content show' : 'content'}>
                                {item.content}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

let data = [
    {
        title:'How to play',
        content:'Up Arrow: Rotate, right arrow: Move right, left arrow: move left, down arrow: lower the piece, Spacebar: Fast drop, p: pause.',
    },
    {
        title:'HighScores',
        content: 'Your best Score: ' + getHighScore({name:'ReactrisPoints'})
    }
]

export default Accordion;