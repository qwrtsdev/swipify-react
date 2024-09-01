> [!WARNING]
> **This repository is under progress**: Please don't expect it to work (even a bit)

> [!WARNING]
> **This repository is for educational**: This is my pre-final project. I'm not a professional so please dont going too harsh for me

## Install dependencies
```
npm install
```

## Get access to Spotify API
- Go to [Spotify API Dashboard](https://developer.spotify.com/dashboard/) and register (if needed)
- Create the application
- Get application's `Client ID` & `Client Secret`
- Create `.env` file and put this
```
SPOTIFY_CLIENT=<your client id goes here>
SPOTIFY_SECRET=<your client secret goes here>
SPOTIFY_ACCESS=<read the next part>
```

## How to get an API access key
- In this tutorial i'll be using **cURL** as a tool for requesting an API key (you can use Postman or anything else as long as it give things you wanted)
- This is the **Client credentials** method so it does not supporting to automatically refresh the access key for you (read about this more [here](https://developer.spotify.com/documentation/web-api/concepts/authorization))
1. Use this command in the terminal
   ```
   curl -X POST "https://accounts.spotify.com/api/token" -H "Content-Type: application/x-www-form-urlencoded" -d "grant_type=client_credentials&client_id=<SPOTIFY_CLIENT>&client_secret=<SPOTIFY_SECRET>"
   ```
   - The `-X` tell cURL this is the endpoint
   - The `-H` tell cURL this is the header
   - The `d` tell cURL this is the data (MUST BE REPLACED WITH YOUR CLIENT ID & CLIENT SECRET)
2. You will get the response like
   ```
   {"access_token":"<SPOTIFY_ACCESS>","token_type":"Bearer","expires_in":3600}
   ```
   - The `<SPOTIFY_ACCESS>` will be a long piece of string
3. Put `<SPOTIFY_ACCESS>` in your `.env` file
   ```
   SPOTIFY_ACCESS=<your access token goes here>
   ```