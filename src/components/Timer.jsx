import {  useEffect } from 'react';

export default function Timer(prop) {

    useEffect(() => {
        if (prop.gameWon) {
            return; // Stop updating when game is won
        }

        const interval = setInterval(() => {
            prop.setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [prop.gameWon, prop.setSeconds]);

    return (
        <div className="timer">
            <h2>Timer: {prop.seconds}s</h2>
        </div>
    )
}