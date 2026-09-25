import { useEffect, useState } from "react";
import { CardContent, Card, CardHeader, CardTitle } from "@/components/ui/card";
import { getSpotifyCurrentlyPlaying } from "../utils/getSpotify";

const Spotify = () => {
  const [albumName, setAlbumName] = useState<string | null>(null);
  const [albumCover, setAlbumCover] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log(albumCover);
  useEffect(() => {
    let ignore = false;

    const loadAlbum = async () => {
      const currentlyPlaying = await getSpotifyCurrentlyPlaying();

      if (!ignore) {
        setAlbumName(currentlyPlaying?.item?.album?.name ?? null);
        const cover = currentlyPlaying?.item?.album?.images?.find(
          (image) => image.width == 300,
        )?.url;
        setAlbumCover(cover ?? null);
        setIsLoading(false);
      }
    };

    void loadAlbum();

    return () => {
      ignore = true;
    };
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {isLoading ? "Loading album…" : (albumName ?? "No album available")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <img src={albumCover} style={{ minHeight: 300, minWidth: 300 }} />
      </CardContent>
    </Card>
  );
};
export default Spotify;
