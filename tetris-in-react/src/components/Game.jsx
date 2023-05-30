import Menu from "./Menu";

const Game = ({ rows, columns}) => {
    const start = () => {console.log("Aguarda o jogo ficar pronto emocionado")}
    return (

        <div className="Game">
            <Menu OnClick={start}/>
        </div>
    
    );
}

export default Game;