import express from "express";
import * as SpotifyPlaylistService from "../services/spotify-playlist-service.js";
const app = express();

app.use(express.json());

app.post("/spotify/playlist", async (req, res) => {
  try {
    const baruSpotifyPlaylist = await SpotifyPlaylistService.createSpotifyPlaylist(req.body);
    res.status(201).json({
      status: "success",
      data: {
        playlist: baruSpotifyPlaylist,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});

app.get("/spotify/playlist", (req, res) => {
  try {
    const semuaSpotifyPlaylist = SpotifyPlaylistService.getSemuaSpotifyPlaylist(req);
    res.status(200).json({
      status: "success",
      data: {
        semuaSpotifyPlaylist,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
});


app.get("/spotify/playlist:id", async (req, res) => {
  try {
    const spotifyPlaylist = await SpotifyPlaylistService.getPlaylistById(req);
    res.status(200).json({
      status: "success",
      data: {
        spotifyPlaylist,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
});

export default app;
