import React from "react";

import Preview from "./Preview"

const Previews = ({tetrominos}) => {
    const previewTetrominoes = tetrominos.slice(1 - tetrominos.length).reverse();

    return (
        <>
            {previewTetrominoes.map((tetromino, index) => (
                <Preview tetromino={tetromino} index={index} key={index} />
            ))};
        </>
    );
};

export default React.memo(Previews)