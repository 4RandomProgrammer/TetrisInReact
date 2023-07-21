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

export const hasCollision = ({board, position, shape}) => {
    for (let y = 0; y < shape.length; y++) {
        const row = y + position.row;

        for (let x = 0; x < shape[y].length; x++) {

            
            if(shape[x][y]){
                const column = x + position.column;

                if(
                    board.rows[row] &&
                    board.rows[row][column] &&
                    board.rows[row][column].occupied
                ) {
                    
                    return true;
                }

            }
            
        }
        
    }
    return false;
}

export const isWithinBoard = ({board, position, shape}) => {
    for (let y = 0; y < shape.length; y++) {
        const row = y + position.row;

        for (let x; x < shape[y].length; x++){
            
            if (shape[x][y]) {
                const column = x + position.column;
                const isValidPosition = board.rows[row] && board.rows[row][column]

                if (!isValidPosition) return false;
            }
        }
    }
    console.log("aqui1")
    return true;
}