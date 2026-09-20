import React from "react";
import { CardContent, Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  getSpotifyCurrentlyPlaying,
  type SpotifyCurrentlyPlayingResponse,
} from "../utils/getSpotify";

const Spotify = () => {
  const spotifyData: SpotifyCurrentlyPlayingResponse =
    getSpotifyCurrentlyPlaying();
  spotifyData.map((data: JSON) => {
    console.log(spotifyData.item.album.name);
  });
  return (
    <Card>
      <CardHeader>Header Text</CardHeader>
      <CardContent>Content Text</CardContent>
    </Card>
  );
};
export default Spotify;
