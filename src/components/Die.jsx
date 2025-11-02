export default function Die(prop) {
    return (
        <button className={`die ${prop.isHeld ? "held" : "not-held"}`} style={{ backgroundColor: prop.isHeld && "#59E391" }} onClick={prop.holdDice}>{prop.value}</button>
    )
}