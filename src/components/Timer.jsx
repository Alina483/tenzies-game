import { useState, useEffect } from 'react';

export default function Timer({ gameWon }) {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (gameWon) {
            return; // Stop updating when game is won
        }

        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [gameWon]);

    return (
        <div className="timer">
            <h2>Timer: {seconds}s</h2>
        </div>
    )
}