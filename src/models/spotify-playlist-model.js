import * as filesSystem from "fs";
const dataSpotifyPlaylist = filesSystem.readFileSync("./data.json", "utf-8");
const dataSpotifyPlaylistObject = JSON.parse(dataSpotifyPlaylist );

export const createSpotifyPlaylist = async (spotifyPlaylistRequest) => {
  const spotifyPlaylist = {
    id: generateSpotifyPlaylistId(),
    title: spotifyPlaylistRequest.title,
    artists: spotifyPlaylistRequest.artists,
    url: spotifyPlaylistRequest.url,
    count: 0,
  };

  dataSpotifyPlaylistObject.push(spotifyPlaylist);

  
  await filesSystem.promises.writeFile("./data.json", JSON.stringify(dataSpotifyPlaylistObject));

  return spotifyPlaylist;
};

export const getSemuaSpotifyPlaylistSortByCount = () => {
  const sortedDataObj = [...dataSpotifyPlaylistObject].sort((p1, p2) => p2.count - p1.count);
  return sortedDataObj;
};

const generateSpotifyPlaylistId = () => {
  return Math.random().toString(36).substring(2, 9);
};


export const getPlaylistById = async (id) => {
  const playlist = dataSpotifyPlaylistObject.find((el) => (el.id = id));
  playlist.count = playlist.count + 1;
  await filesSystem.promises.writeFile("./data.json", JSON.stringify(dataSpotifyPlaylistObject));
  return playlist;
};

export const getSemuaSpotifyPlaylist = () => {
  return dataSpotifyPlaylistObject;
};

