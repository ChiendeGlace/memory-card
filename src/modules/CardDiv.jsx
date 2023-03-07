import React from 'react';
import Card from './Card';
import beagle from './beagle.jpg';
import corgi from './corgi.jpg';
import cat from './cat.jpg';
import husky from './husky.jpg';
import puppy from './puppy.jpg';
import romantic from './romantic.jpg';
import snowman from './snowman.jpg';
import vacation from './vacation.jpg';

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
    { name: 'Angry', source: cat },
    {
        name: 'Sleepy',
        source: beagle,
    },
    {
        name: 'Photogenic',
        source: corgi,
    },
    { name: 'Snowman', source: snowman },
    { name: 'Romantic', source: romantic },
    { name: 'Puppy', source: puppy },
    { name: 'Thoughtful', source: husky },
    { name: 'Hawaii', source: vacation },
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
