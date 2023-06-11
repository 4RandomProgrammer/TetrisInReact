import { defaultCell} from "./Cell";
import { transferBoard } from "./Tetrominoes";

export const buildBoard = ({ rows, columns }) => {
    const builtRows = Array.from({length:rows}, 
        () => Array.from({length:columns}, () => ({
        ...defaultCell
    }))
    
    );

    return {
        rows: builtRows,
        size: {rows, columns}
    };
};

export const nextBoard = ({board, player, resetPlayer, addLinesCleared}) => {
    const { tetromino, position } = player;

    let rows = board.rows.map((row) =>
        row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
    );

    rows = transferBoard({
        className:tetromino.className,
        isOccupied: player.collided,
        position,
        rows,
        shape: tetromino.shape
    })

    return {
        rows,
        size:  {...board}
    }
}