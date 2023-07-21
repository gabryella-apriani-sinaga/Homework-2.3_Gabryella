import * as spotifyPlaylistModel from "../models/spotify-playlist-model.js";

export const createSpotifyPlaylist = async (requestSpotifyPlaylist) => {
  const spotifyPlaylistRequest = {
    title: requestSpotifyPlaylist.title,
    artists: requestSpotifyPlaylist.artists,
    url: requestSpotifyPlaylist.url,
  };
  const baruPlaylist = await spotifyPlaylistModel.createSpotifyPlaylist(spotifyPlaylistRequest);
  return baruPlaylist;
};

export const getPlaylistById = async (request) => {
  const id = request.params.id;
  const playlist = spotifyPlaylistModel.getPlaylistById(id);
  return playlist;
};


export const getSemuaSpotifyPlaylist = (request) => {
  if (!request.query.sortBy) {
    return spotifyPlaylistModel.getSemuaSpotifyPlaylist();
  }
  return spotifyPlaylistModel.getSemuaSpotifyPlaylistSortByCount ();
};

