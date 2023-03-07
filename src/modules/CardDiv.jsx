import React from 'react';
import Card from './Card';

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

let cardsArray = [
    { name: 'Angry', source: '/public/cat.jpg' },
    {
        name: 'Sleepy',
        source: '/public/beagle.jpg',
    },
    { name: 'Photogenic', source: '/public/corgi.jpg' },
    { name: 'Snowman', source: '/public/snowman.jpg' },
    { name: 'Romantic', source: '/public/romantic.jpg' },
    { name: 'Puppy', source: '/public/puppy.jpg' },
    { name: 'Thoughtful', source: '/public/husky.jpg' },
    { name: 'Hawaii', source: '/public/vacation.jpg' },
];

const CardDiv = ({ selected, setSelected, setScore, setGameOver }) => {
    cardsArray = shuffle(cardsArray);
    return (
        <section>
            {cardsArray.map((card) => {
                return (
                    <Card
                        key={card.source}
                        name={card.name}
                        source={card.source}
                        selected={selected}
                        setSelected={setSelected}
                        setScore={setScore}
                        setGameOver={setGameOver}
                    />
                );
            })}
        </section>
    );
};

export default CardDiv;
