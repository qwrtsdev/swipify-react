import React from 'react';
import ReactDOM from 'react-dom/client';
import './Card.css'
import TinderCard from 'react-tinder-card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

import songinfo from '../../data/songinfo.js'

function Card() {
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div className='card'>
            <div className="card-swipeable">
                {songinfo.map((songdata, index) => ( // loop inside songinfo.js
                    <TinderCard
                        key={index} // needed for loop map
                        onSwipe={onSwipe} // individuals
                        onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                        preventSwipe={['right', 'left']}
                    >
                        <div className="card-detail">
                            <img src={`../../assets/covers/${songdata.tracksCover}.jpg`} alt={`${songdata.name}'s Cover`} />
                            <div className="card-info">
                                <p>{songdata.name}</p>
                                <p>{songdata.artist}</p>
                            </div>
                        </div>
                    </TinderCard>
                ))}
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