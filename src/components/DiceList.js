
import Die from "./Die";

function DiceList({ diceList }) {
    return (
        <div class="dice-list">
            {diceList.map(die => <Die die={die} />)}
        </div>
    );
}

export default DiceList;
