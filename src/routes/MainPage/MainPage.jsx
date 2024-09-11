// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './MainPage.css';

import Card from '../../components/card/Card';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation, faArrowsRotate, faSpinner, faBackward, faHeart, faHeartCrack, faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons'
import TinderCard from 'react-tinder-card';

function MainPage() {
    const [track, setTrack] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const trackSearch = async () => {
        const queryName = 'abcdefghijklmnopqrstuvwxyz'.split('');
        const randomQuery = Math.floor(Math.random() * queryName.length);
        const trackIndex = Math.floor(Math.random() * 1000);

        try {
            const response = await axios.get(`https://api.spotify.com/v1/search`, {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_SPOTIFY_ACCESS}`,
                },
                params: {
                    q: queryName[randomQuery],
                    offset: trackIndex,
                    type: 'track',
                    limit: 2,
                },
            });

            const resp = response.data.tracks.items;
            const trackResponse = resp.map((track) => ({
                name: track.name,
                artists: track.artists.map((artist) => artist.name).join(', '),
                trackId: track.id,
                explicit: track.explicit,
                popularity: track.popularity,
                previewUrl: track.preview_url,
            }));

            return trackResponse;
        } catch (error) {
            throw new Error(error.response ? error.response.data.error.message : error.message);
        }
    };

    useEffect(() => {
        const trackQuery = async () => {
            try {
                const tracks = await trackSearch();
                setTrack(tracks);  // Set the entire array of tracks
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        trackQuery();
    }, []);

    if (loading) {
        return (
            <div className="content-wrap">
                <p className="loading-state"><FontAwesomeIcon icon={faSpinner} /></p>
            </div>
        )
    }
    if (error) {
        return (
            <div className="content-wrap">
                <div className="error-state">
                    <div className="error-message">
                        <p className="error-message-head"><FontAwesomeIcon icon={faTriangleExclamation} /></p>
                        <p className="error-message-msg">{error}</p>
                    </div>
                    <div className="error-button">
                        <button className='error-refresh' onClick={() => {window.location.reload(false)}}><FontAwesomeIcon icon={faArrowsRotate} /> Refresh</button>
                    </div>
                </div>
            </div>
        )
    }

    // snippets for implementations
    const onSwipe = (direction) => {
        console.log('swiped: ' + direction);
    }
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen');
    }

    const swipe = () => {
        // interactions
    }
    const cardRestore = () => {
        // rewind cards
    }
    const cardFav = () => {
        // work if swiped left
    }
    const cardSkip = () => {
        // work if swiped right
    }

    return (
        <div className='content-wrap'>
            {track.map((myTracks) => (
                <div className="card-content" key={myTracks.trackId}>
                    <TinderCard 
                    preventSwipe={['up','down']}
                    onSwipe={onSwipe} 
                    onCardLeftScreen={() => {onCardLeftScreen('test')}}
                    swipeThreshold={1500}
                >
                        <Card trackInfo={myTracks} />
                    </TinderCard>
                </div>
            ))}
            <div className="card-interaction">
                <button onClick={cardRestore}>
                    <FontAwesomeIcon icon={faBackward} />
                </button>
                <button onClick={swipe('left', cardFav)}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <button onClick={swipe('right', cardSkip)}>
                    <FontAwesomeIcon icon={faHeartCrack} />
                </button>
                <button onClick={console.log('redirect button')}>
                    <FontAwesomeIcon icon={faHeadphonesSimple} />
                </button>
            </div>
        </div>
    );
}

export default MainPage;