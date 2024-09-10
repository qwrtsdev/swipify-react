import React, { useState, useEffect } from 'react';

function Card(props) {
    const { trackInfo } = props;
    
    return (
        <div className='card-swipable'>
            <p>{trackInfo.name || 'Unknown Name'}</p>
            <p>{trackInfo.artists || 'Unknown Artist'}</p>
            <p>{trackInfo.trackId || 'No ID'}</p>
            <p>{trackInfo.explicit ? 'Explicit' : 'Not Explicit'}</p>
            <p>{trackInfo.popularity || 'Unknown Popularity'}</p>
            <p>{trackInfo.previewUrl ? <a href={trackInfo.previewUrl}>Preview</a> : 'No Preview Available'}</p>
        </div>
    );
}

export default Card;