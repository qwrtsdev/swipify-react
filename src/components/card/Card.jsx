import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Card.css'

import TinderCard from 'react-tinder-card'
import trackSearch, { name, artist } from '../../api/trackSearch';{ name, artist } from '../../api/trackSearch';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
// import { faXmark } from '@fortawesome/free-solid-svg-icons'
// import { faCheck } from '@fortawesome/free-solid-svg-icons'
// import { faMusic } from '@fortawesome/free-solid-svg-icons'

function Card() {
    const resp = trackSearch();

    return (
        <div className="card">
            <p>{resp.name}</p>
            <p>{resp.artist}</p>
        </div>
    );
}

export default Card;