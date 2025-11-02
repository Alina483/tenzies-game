const pipMap = {
  1: [4],
  2: [0, 8],
  3: [0, 4, 8],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 2, 3, 5, 6, 8]
};

export default function Die(prop) {
    return (
        <div className={`die-face${prop.isHeld ? ' held' : ''}`} onClick={prop.holdDice}>
      {[...Array(9)].map((_, i) => (
        <div key={i} className={`pip${pipMap[prop.value].includes(i) ? ' active' : ''}`}></div>
      ))}
    </div>
    );
}

