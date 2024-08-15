import React from 'react';
import ReactDOM from 'react-dom/client';
import './Card.css'
import TinderCard from 'react-tinder-card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

function Card() {
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }
    
    return (
        <div>
            <div className="card-swipeable">
                <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
                    <img src="" alt="" />
                    <div className="card-info">

                    </div>
                </TinderCard>
            </div>
            <div className="card-control">
                <FontAwesomeIcon icon={faClockRotateLeft} />
                <FontAwesomeIcon icon={faXmark} />
                <FontAwesomeIcon icon={faCheck} />
                <FontAwesomeIcon icon={faMusic} />
            </div>
        </div>
    );
}

export default Card;