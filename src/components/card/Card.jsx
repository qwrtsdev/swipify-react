import React, { useState, useEffect } from 'react';

function Card(props) {
    const { trackInfo } = props;
    
    return (
        // <p>{trackInfo.trackId || 'No ID'}</p>
        // <p>{trackInfo.explicit ? 'Explicit' : 'Not Explicit'}</p>
        // <p>{trackInfo.popularity || 'Unknown Popularity'}</p>

        <div className="card-swipable">
            <div className="card-left">
                <p className="limited-text">{trackInfo.name || 'N/A'}</p>
                <p className="limited-text">{trackInfo.artists || 'N/A'}</p>
                <p className="limited-text">{trackInfo.previewUrl ? <a href={trackInfo.previewUrl}>Preview</a> : 'No Preview Available'}</p>
            </div>
            <div className="card-right">
                <p>O</p>
            </div>
        </div>
    );
}

export default Card;