
function AddDiceButtons({ addDie }) {

    return (
        <div class="button-list">
            <button onClick={() => addDie(6)}>Add 6 sided Die</button>
            <button onClick={() => addDie(8)}>Add 8 sided Die</button>
            <button onClick={() => addDie(10)}>Add 10 sided Die</button>
            <button onClick={() => addDie(12)}>Add 12 sided Die</button>
            <button onClick={() => addDie(20)}>Add 20 sided Die</button>
            <button onClick={() => addDie(100)}>Add 100 sided Die</button>
        </div>

    )
}

export default AddDiceButtons;