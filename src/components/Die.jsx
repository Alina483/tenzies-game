export default function Die(prop) {
    return (
        <button className="die" style={{ backgroundColor: prop.isHeld && "#59E391" }} onClick={() => prop.holdDice(prop.id)}>{prop.value}</button>
    )
}