import { useState } from 'react'
import Die from '../src/components/Die'

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice())
  const [gameWon, setGameWon] = useState(false)

  if (dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)) {
        setGameWon(true)
  }

  function generateAllNewDice() {
    return new Array(10)
      .fill(0).map(() => ({
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: crypto.randomUUID()
      }))
  }

  function hold(id) {
    setDice(oldDice => oldDice.map((dieObj) => {
      return dieObj.id === id ? {...dieObj, isHeld: !dieObj.isHeld} : dieObj
    }))
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(dieObj => {
      return dieObj.isHeld
        ? dieObj
        : { ...dieObj, value: Math.ceil(Math.random() * 6) };
    }))
  }

  const diceElements = dice.map(dieObj => <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} holdDice={() => hold(dieObj.id)} />)

  return (
    <main>
      <div className="container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
    </main>
  )
}

/**
     * Challenge part 2:
     * 1. Create a new `gameWon` variable.
     * 2. If `gameWon` is true, change the button text to
     *    "New Game" instead of "Roll"
     */