import React from 'react';


const Header = ({score, best}) => {
    return (
        <header>
            <h1>Dog Memory</h1>
            <div className="score-div">
                <h3>Current Score: {score}</h3>
                |
                <h3>Best Score: {best}</h3>
            </div>
        </header>
    )

}

export default Header