import React, { useState, useEffect } from 'react';
import './Card.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faXmark } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
    const { trackInfo } = props;

    const [preview, setPreview] = useState("");

    useEffect(() => {
        const checkPreview = () => {
            if(trackInfo.previewUrl){
                setPreview(<FontAwesomeIcon icon={faPlay} />);
            } else {
                setPreview(<FontAwesomeIcon icon={faXmark} />);
            }
        }
        checkPreview();
    }, []);
    
    return (
        // <p>{trackInfo.trackId || 'No ID'}</p>
        // <p>{trackInfo.explicit ? 'Explicit' : 'Not Explicit'}</p>
        // <p>{trackInfo.popularity || 'Unknown Popularity'}</p>

        <div className="swipe-content">
            <div className="swipe-content__image">
                <img className="swipe-content__image--source" src="https://placehold.co/500x500" />
            </div>
            <div className="swipe-content__info">
                <div className="swipe-content__info--track">
                    <strong><p className="track-name">{trackInfo.name || 'N/A'}</p></strong>
                    <p className="track-artist">{trackInfo.artists || 'N/A'}</p>
                </div>
                <div className="card-right">
                    <p className="track-preview">{trackInfo.previewUrl ? 
                        <p className='track-available'><a href={trackInfo.previewUrl}>{preview}</a> </p>
                        : 
                        <p className='track-not-available'>{preview}</p>}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;