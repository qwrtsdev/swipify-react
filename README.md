

<p align=center>

![Swipify Logo](https://media.discordapp.net/attachments/1297492873398452267/1298371333851185253/swipify-githublogo.png?ex=67195208&is=67180088&hm=81c8044cbfbd41b93b3c651dfd0d2cca07c322730fa730bce6fe0ecf6444f1ad&=&format=webp&quality=lossless&width=994&height=285)

![Discord](https://img.shields.io/discord/1236751677801889792?style=flat&logo=discord&labelColor=blueple&color=%235865F2&link=https%3A%2F%2Fdiscord.gg%2FJKsYSd4TVf) ![GitHub last commit](https://img.shields.io/github/last-commit/qwrtsdev/swipify-react) ![X (formerly Twitter) Follow](https://img.shields.io/twitter/follow/dumbqwrts)


**Swipify** is an open-source music shuffler.<br />
based on [Tinder](https://tinder.com) and [Swipefy](https://x.com/swipefyapp) but made completely from scratch!<br />
for people who feeling bored with their every day song.

</p>

> [!NOTE] 
> This project was my first web application for educational and made during rush, thus it was not taking serious like it should do. You might find it wacky and facing some issues during use.

## 📝 Prequisites
- [Spotify Developer Account](https://developer.spotify.com/)
- [Google Firebase Account]()

## ⚙ Setup
> [!CAUTION]
> For beginners, please don't skipping and follow the instructions carefully to making sure nothing is broken. (sorry for the inconvenience.)
- Go to [Spotify API Dashboard](https://developer.spotify.com/dashboard/) and create the application
- Go to application's settings and copy `Client ID` and `Client Secret`
- Create an `.env` file and enter
    ```
    VITE_SPOTIFY_CLIENT="<your client id goes here>"
    VITE_SPOTIFY_SECRET="<your client secret goes here>"
    VITE_SPOTIFY_ACCESS="<read the next part>"
    ```
- Request an access key (in this situation it was called `SPOTIFY_ACCESS`) by using tools such as [Postman](https://www.postman.com) or [cURL](https://curl.se) and using this template of script
    ```
    - https://accounts.spotify.com/api/token (as the endpoint)
    - application/x-www-form-urlencoded (as header called: Content-Type)
    - client_credentials&client_id=<SPOTIFY_CLIENT>&client_secret=<SPOTIFY_SECRET> (as parameter called: grant_type)
    ```
- You'll get a response from Spotify in this format
    ```
    {"access_token":"<SPOTIFY_ACCESS>","token_type":"Bearer","expires_in":3600}
    ```
- Open your `.env` file and fill out the `<SPOTIFY_ACCESS>` section with the key you got from the response
- Go to [Google Firebase Console](https://console.firebase.google.com) and create a project
- Go to `Authentication` section and setup how you want
- Open your `.env` file and enter
    ```
    VITE_FB_APIKEY=""
    VITE_FB_AUTHDOMAIN=""
    VITE_FB_PROJECTID=""
    VITE_FB_STORAGE=""
    VITE_FB_MESSAGE=""
    VITE_FB_APPID=""
    VITE_FB_MID=""
    ```
    (Some keys just not necessary to use but keep them as they might help. Read full documentation about Firebase Authentication [here](https://firebase.google.com/docs/auth))

## 💬 Community
The **FullstackHub** community is very welcomed for everyone! Where you can ask questions, sharing knowledges and ideas about web development or programming-related topics.<br />

To chat with other community members. You can join the [Discord](https://discord.gg/JKsYSd4TVf) server. 