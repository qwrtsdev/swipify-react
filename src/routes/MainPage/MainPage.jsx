// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './MainPage.css';

import Card from '../../components/card/Card';
import axios from 'axios';
dsfkndkfkfdfkldjfdijkof
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation, faArrowsRotate, faSpinner } from '@fortawesome/free-solid-svg-icons'

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

    function refreshPage() {
        window.location.reload(false);
    }

    if (loading) {
        return (
            <div className="content-wrap">
                <p className="loading-state"><FontAwesomeIcon icon={faSpinner} /></p>;
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
                        <button className='error-refresh' onClick={refreshPage}><FontAwesomeIcon icon={faArrowsRotate} /> Refresh</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>

            {track.map((myTracks) => (
                <Card key={myTracks.trackId} trackInfo={myTracks} />
            ))}
        </>
    );
}

export default MainPage;