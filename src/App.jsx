import { useState, useEffect, useRef } from 'react'
import Die from '../src/components/Die'
import Confetti from 'react-confetti'

export default function App() {
  const [dice, setDice] = useState(() =>generateAllNewDice()) //this is important so React doesnt call the function on every render
  
  const buttonref = useRef(null);

  const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)

  useEffect(() => {
    if (gameWon) {
      buttonref.current.focus()
  }
  }, [gameWon])

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
    if (!gameWon) {
      setDice(oldDice => oldDice.map(die =>die.isHeld ? die :{ ...die, value: Math.ceil(Math.random() * 6) }))
    } else {
      setDice(generateAllNewDice())
    }
  }

  const diceElements = dice.map(dieObj => <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} holdDice={() => hold(dieObj.id)} />)

  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="container">
        {diceElements}
      </div>
      <button ref={buttonref} className="roll-dice" onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
    </main>
  )
}


/**
     * Challenge: Allow the user to play a new game when the
     * button is clicked and they've already won
     */
