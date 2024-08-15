import React from 'react';
import ReactDOM from 'react-dom/client';
import TinderCard from 'react-tinder-card'

function Card() {

    // Create a function that happens when recieved "direction" data. [when swiping]
    const FunctionOne = (direction) => {
        console.log('You swiped: ' + direction)
    }

    // Create a function that happens when recieved "direction" data. [when it out of the screen]
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    // ## Cards rendering ##
    // onSwipe , onCardLeftScreen is functions we made
    // preventSwipe is value we have to set for preventing card be swipe from other directions
    return (
        <div className="card">
            <TinderCard onSwipe={FunctionOne} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
                {/* Create contents here. Let TinderCard component wraps everything for interactivity */}
            </TinderCard>
        </div>
    );
}

export default Card;