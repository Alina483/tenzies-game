import { useState } from 'react'
import Die from '../src/components/Die'

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice())

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

  const diceElements = dice.map(dieObj => <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} holdDice={() => hold(dieObj.id)} />)

  return (
    <main>
      <div className="container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={()=>setDice(generateAllNewDice())}>Roll Dice</button>
    </main>
  )
}

/**
     * Challenge: Update the `rollDice` function to not just roll
     * all new dice, but instead to look through the existing dice
     * to NOT role any that are being `held`.
     * 
     * Hint: this will look relatively similiar to the `holdDice`
     * function below. When we're "rolling" a die, we're really
     * just updating the `value` property of the die object.
     */
