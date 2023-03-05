import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';
import Header from './modules/Header';
import CardDiv from './modules/CardDiv';

const App = () => {
    const [selected, setSelected] = useState([]);
    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    useEffect(() => {
        if (score > best) {
            setBest(score);
        }
    }, [score, best]);
    if (gameOver) {
        return (
          <div className="game-over">
            <h2>Game Over!</h2>
            <button onClick={() => setGameOver(false)}>Play again</button>
          </div>
        )
    } else {
        return (
            <div className="container">
                <Header score={score} best={best} />
                <CardDiv
                    selected={selected}
                    setSelected={setSelected}
                    setScore={setScore}
                    setGameOver={setGameOver}
                />
            </div>
        );
    }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
