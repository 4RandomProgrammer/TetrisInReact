import Accordion from './Accordion';
import './Menu.css'

const Menu = ({ OnClick }) => (
    <div className="Menu">
        <h1>Welcome to Reactris!</h1>
        <button className="Button" onClick={OnClick}>Play tetris</button>
        <Accordion></Accordion>
    </div>
)

export default Menu;