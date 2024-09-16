// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './MainPage.css';

import Card from '../../components/card/Card';
import axios from 'axios';
import TinderCard from 'react-tinder-card';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation, faArrowsRotate, faSpinner, faBackward, faHeart, faHeartCrack, faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons'

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
                    limit: 3,
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
            <div className="content-wrap--system">

                <p className="content-wrap--system__loading"><FontAwesomeIcon icon={faSpinner} /></p>

            </div>
        )
    }
    if (error) {
        return (
            <div className="content-wrap--system">

                <div className="content-wrap--system__error">
                    <p className="content-wrap--system__error--head"><FontAwesomeIcon icon={faTriangleExclamation} /> <strong>WARNING</strong></p>
                    <div className="content-wrap--system__error--prompt">
                        <p className="content-wrap--system__error--prompt__msg">{error}</p>
                        <button className='content-wrap--system__error--prompt__refresh' onClick={() => {window.location.reload(false)}}><FontAwesomeIcon icon={faArrowsRotate} /> Refresh</button>
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

    const warningToast = () => {
        toast.warn("This feature will be coming soon.");
    }

    return (
        <div className='content-wrap--main'>

            <div className="card--swipable">
                {track.map((myTracks) => (
                    <div className="card--swipable--generate" key={myTracks.trackId}>
                        <TinderCard 
                        preventSwipe={['up','down']}
                        onSwipe={onSwipe} 
                        onCardLeftScreen={() => {onCardLeftScreen('test')}}
                        flickOnSwipe={true}
                    >
                            <Card trackInfo={myTracks} />
                        </TinderCard>
                    </div>
                ))}
            </div>
            <div className="card--buttons">
                <button className="card--buttons--rewind" onClick={warningToast}>
                    <FontAwesomeIcon icon={faBackward} />
                </button>
                <button className="card--buttons--like" onClick={swipe('left', cardFav)}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <button className="card--buttons--dislike" onClick={swipe('right', cardSkip)}>
                    <FontAwesomeIcon icon={faHeartCrack} />
                </button>
                <button className="card--buttons--listen" onClick={warningToast}>
                    <FontAwesomeIcon icon={faHeadphonesSimple} />
                </button>
            </div>

        </div>
    );
}

export default MainPage;