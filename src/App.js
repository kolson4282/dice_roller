import { useState } from 'react';
import './App.css';
import DiceList from './components/DiceList';

function App() {
  const [diceList, setDiceList] = useState([{ sides: 6, value: 1 }, { sides: 8, value: 1 }, { sides: 10, value: 1 }, { sides: 12, value: 1 }, { sides: 20, value: 1 }, { sides: 100, value: 1 }])

  const diceRoll = () => {
    let newDiceList = [];
    diceList.forEach(die => {
      let newDie = die;
      newDie.value = Math.floor(Math.random() * newDie.sides) + 1;
      newDiceList.push(die);
    })
    setDiceList(newDiceList);
  }

  const getTotal = () => {
    let total = 0;
    diceList.forEach(die => {
      total += die.value;
    })
    return total;
  }

  return (
    <div class="app">
      <DiceList diceList={diceList} />
      <button onClick={diceRoll}>Roll Dice</button>
      <p>Total = {getTotal()}</p>
    </div>
  );
}

export default App;
