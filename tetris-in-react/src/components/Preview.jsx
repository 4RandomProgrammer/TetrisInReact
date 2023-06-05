import React from 'react';
import './Preview.css'

import { buildBoard } from '../utils/Board';
import { transferBoard } from '../utils/Tetrominoes';

import BoardCell from './BoardCell';

const Preview = ({tetromino, index}) => {
    const {shape, className} = tetromino; //BUG AQ
    const board = buildBoard({rows:4, columns:4})

    const style = {top: `$(index * 15)vw`};

    board.rows = transferBoard({
        className,
        isOccupied: false,
        position: {row: 0, column: 0},
        rows: board.rows,
        shape
    });
    
    return (
        <div className="Preview" style={style}>
            <div className="PreviewBoard">
                {board.rows.map((row, y) =>
                    row.map((cell,x) =>(
                        <BoardCell key={x - board.size.columns + x} cell={cell} />
                    ))
                )}
            </div>
        </div>
    );

}


export default React.memo(Preview)