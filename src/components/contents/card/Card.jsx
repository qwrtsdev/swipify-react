import React from 'react';
import ReactDOM from 'react-dom/client';
import './Card.css'
import TinderCard from 'react-tinder-card'
// import { faXmark } from '@fortawesome/free-solid-svg-icons'
// import { faCheck } from '@fortawesome/free-solid-svg-icons'
// import { faMusic } from '@fortawesome/free-solid-svg-icons'

function Card() {
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }
    
    return (
        <div className="card">
            <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>Hello, World!</TinderCard>
        </div>
    );
}

export default Card;