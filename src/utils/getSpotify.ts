const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

export type SpotifyCurrentlyPlayingResponse = {
  item?: {
    name?: string;
    album?: {
      name?: string;
    };
  };
};

export const getSpotifyBearerToken = async () => {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`),
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: SPOTIFY_REFRESH_TOKEN,
      }),
    });

    const data = await response.json();

    console.log("Spotify response:", data);

    return data.access_token;
  } catch (error) {
    console.error("Error fetching Spotify bearer token:", error);
  }
};

export const getSpotifyCurrentlyPlaying = async () => {
  try {
    const bearerToken = await getSpotifyBearerToken();
    const response = await fetch("https://api.spotify.com/v1/me/player", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    if (response.status === 204) {
      console.log("Nothing currently playing");
      return null;
    }

    const data: SpotifyCurrentlyPlayingResponse = await response.json();
    console.log("Spotify response:", data);
    return data;
  } catch (error) {
    console.error("Error fetching Spotify", error);
  }
};
