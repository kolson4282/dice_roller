
import './Die.css'

function Die ({die}) {
    return (
        <div className={`die side-${die.sides}`}>
            <span>{die.value}</span>
        </div>
    )
}

export default Die;