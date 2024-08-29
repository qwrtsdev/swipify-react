// ### this is now disabled for some reason.

// import 'dotenv/config';
// import axios from 'axios';

// import trackSearch from '../../api/trackSearch';

// async function getArtistData() {
//     // try {
//     //     const response = await axios.get(`https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb`, {
//     //         headers: {
//     //             'Authorization': `Bearer ${process.env.SPOTIFY_ACCESS}`
//     //         }
//     //     });
//     //     return response.data;
//     // } catch(error) {
//     //     console.error('Failed to fetch data: ', error.message);
//     //     return error.message;
//     // }
//     await trackSearch();
// }

// // ### testing section ###
// let tracks = [];
// let indexs = 1;
// do {
//     const res = await trackSearch();
//     let changes = res.name + indexs;

//     tracks.push(changes);

//     console.log(tracks);
//     indexs++;
// } while (tracks.length <= 3);

// export default getArtistData;