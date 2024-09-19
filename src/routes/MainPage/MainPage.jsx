// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './MainPage.css';
import { useNavigate } from "react-router-dom"

import Card from '../../components/card/Card';
import axios from 'axios';
import TinderCard from 'react-tinder-card';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation, faArrowsRotate, faSpinner, faBackward, faHeart, faHeartCrack, faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons'

// NOTE: Firebase configuration & initialize
const firebaseConfig = {
    apiKey: `${import.meta.env.VITE_FB_APIKEY}`,
    authDomain: `${import.meta.env.VITE_FB_AUTHDOMAIN}`,
    projectId: `${import.meta.env.VITE_FB_PROJECTID}`,
    storageBucket: `${import.meta.env.VITE_FB_STORAGE}`,
    messagingSenderId: `${import.meta.env.VITE_FB_MESSAGE}`,
    appId: `${import.meta.env.VITE_FB_APPID}`,
    measurementId: `${import.meta.env.VITE_FB_MID}`,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function MainPage() {
    const [track, setTrack] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const authUser = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => authUser(); // Cleanup subscription on unmount
    }, []);
    
    const navigate = useNavigate();

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
    const onSwipe = async (direction) => {
        if (!user) {
          toast.error('Please login before using Swipify.');
          navigate('/login');
        } else {
          try {
            const newTracks = await trackSearch();
            // Use spread to merge the current tracks with new ones
            const updatedTracks = [...track, ...newTracks]; 
      
            // Remove the first element
            const trackAfterRemove = updatedTracks.slice(1);
      
            // Update state with the new array
            setTrack(trackAfterRemove);
          } catch (error) {
            toast.error(error.message);
          }
        }
      };
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen');
    }

    const swipe = () => {
        // interactions
    }
    const cardRestore = () => {
        // rewind cards
    }
    const cardFav = async () => {
        if (!user) {
          toast.error('Please login before using Swipify.');
          navigate('/login');
        } else {
          try {
            const newTracks = await trackSearch();
            // Use spread to merge the current tracks with new ones
            const updatedTracks = [...track, ...newTracks]; 
      
            // Remove the first element
            const trackAfterRemove = updatedTracks.slice(1);
      
            // Update state with the new array
            setTrack(trackAfterRemove);
          } catch (error) {
            toast.error(error.message);
          }
        }
      };
      
    const cardSkip = async (direction) => {
        if (!user) {
          toast.error('Please login before using Swipify.');
          navigate('/login');
        } else {
          try {
            const newTracks = await trackSearch();
            // Use spread to merge the current tracks with new ones
            const updatedTracks = [...track, ...newTracks]; 
      
            // Remove the first element
            const trackAfterRemove = updatedTracks.slice(1);
      
            // Update state with the new array
            setTrack(trackAfterRemove);
          } catch (error) {
            toast.error(error.message);
          }
        }
      }; 
    const goListen = () => {
        window.location.href(`https://open.spotify.com/track/${track[0].trackId}`);
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
                <button className="card--buttons--like" onClick={cardFav}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <button className="card--buttons--dislike" onClick={cardSkip}>
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