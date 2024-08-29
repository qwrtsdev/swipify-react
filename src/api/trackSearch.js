import 'dotenv/config';
import axios from 'axios';

async function trackSearch()  {

    // randomize logic (i know it sucks krub)
    const queryName = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const randomQuery = Math.floor(Math.random() * queryName.length);
    const trackIndex = Math.floor(Math.random() * 1000)

    try {
        const response = await axios.get(`https://api.spotify.com/v1/search`, {
            headers: {
                'Authorization': `Bearer ${process.env.SPOTIFY_ACCESS}`
            },
            params: {
                q: `${queryName[randomQuery]}`,
                offset: trackIndex,
                type: 'track',
                limit: 1
            }
        });

        const resp = await response.data.tracks.items;
        // default track object
        const trackInfo = {
            name: "",
            artist: "",
        }
        resp.map((tracks) => {
            trackInfo.name = String(tracks.name);
            trackInfo.artist = String(tracks.artists.map(artist => artist.name).join(', '));
        })
        return trackInfo;
    } catch(error) {
        return error.message;
    }

}

// ## debugging ##
// const debuglog = await trackSearch();
// console.log(debuglog);

export default trackSearch;