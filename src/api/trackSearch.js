import 'dotenv/config';
import axios from 'axios';

async function trackSearch()  {
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
        const trackResponse = resp.map((track) => {
            return {
                name: track.name,
                artists: String(track.artists.map(artist => artist.name).join(", ")),
                trackId: track.id,
                explicit: track.explicit,
                popularity: track.popularity,
                previewUrl: track.preview_url,
                // imagesUrl: JSON.stringify(track.album.images, ['height', 'url']),
            }
        })
        await console.log(trackResponse);
        return trackResponse;
    } catch(error) {
        return error.message;
    }
}

trackSearch();

// export default trackSearch;