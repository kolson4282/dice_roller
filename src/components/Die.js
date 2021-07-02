
import './Die.css'

function Die({ die }) {
    return (
        <div class="die-container">
        <h3>{die.sides} sided die</h3>
        <div className={`die side-${die.sides}`}>
            
            <span>{die.value}</span>
        </div>
        </div>
    )
}

export default Die;