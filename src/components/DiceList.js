
import Die from "./Die";
import './DiceList.css';

function DiceList({ diceList, removeDie }) {
    return (
        <div className="dice-list">
            {diceList.map((die) => <Die die={die} key={die.id} removeDie={() => removeDie(die.id)} />)}
        </div>
    );
}

export default DiceList;
