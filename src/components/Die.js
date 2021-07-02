
import './Die.css'

function Die({ die, removeDie }) {
    return (
        <div className="die-container">
            <h3>{die.sides} sided die</h3>
            <button onClick={removeDie}>Remove</button>
            <div className={`die side-${die.sides}`}>
                {die.value}
                
            </div>
        </div>
    )
}

export default Die;