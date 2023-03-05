import React from 'react';

const Card = ({ name, source, selected, setSelected, setScore, setGameOver }) => {
    const handleClick = () => {
        if (selected.includes(name)) {
            setScore(0)
            setSelected([])
            setGameOver(true);
        } else {
            setSelected((prevItems) => [...prevItems, name]);
            setScore(prev => prev + 1)
        }
    };
    return (
        <div className="card-div" id={name} onClick={handleClick}>
            <img src={source} alt={name} width={200} height={200} />
            <h3>{name}</h3>
        </div>
    );
};

export default Card;
