import { useState, useEffect } from 'react';
import './App.css';
import AddDiceButtons from './components/AddDiceButtons';
import DiceList from './components/DiceList';

function App() {
  const [diceList, setDiceList] = useState([])
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    addDie(6);
  }, []);

  const diceRoll = () => {
    let newDiceList = [];
    diceList.forEach(die => {
      let newDie = die;
      newDie.value = Math.floor(Math.random() * newDie.sides) + 1;
      newDiceList.push(die);
    })
    setDiceList(newDiceList);
  }

  const removeDie = (id) => {
    let newDiceList;
    if (diceList.length > 0) {
      newDiceList = diceList.filter((die) => die.id !== id)
      setDiceList(newDiceList);
    }
  }

  const clearAllDice = () => {
    setDiceList([]);
  }

  const addDie = (sides) => {
    setDiceList([...diceList, { sides: sides, value: 1, id: counter }])
    setCounter(counter + 1);
  }

  const getTotal = () => {
    let total = 0;
    diceList.forEach(die => {
      total += die.value;
    })
    return total;
  }

  return (
    <div className="app">
      <AddDiceButtons addDie={addDie}></AddDiceButtons>
      <button onClick={diceRoll}>Roll Dice</button>
      <button onClick={clearAllDice}>Clear All</button>
      <p>Total = {getTotal()}</p>
      <DiceList diceList={diceList} removeDie={removeDie} />
    </div>
  );
}

export default App;
