import React from 'react';


const Header = ({score, best}) => {
    return (
        <header>
            <h1>Dog Memory</h1>
            <div className="score-div">
                <p>Score: {score}</p>
                <p>Best: {best}</p>
            </div>
        </header>
    )

}

export default Header