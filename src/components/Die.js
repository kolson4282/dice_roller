
import './Die.css'

function Die({ die, removeDie }) {
    return (
        <div className="die-container">
            <h3>{die.sides} sided die</h3>
            <div onClick={removeDie} className={`die side-${die.sides}`}>
                {die.value}

            </div>
        </div>
    )
}

export default Die;