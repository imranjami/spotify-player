import "./App.css"
import Login from "./Login"
import React, { useState, useEffect } from "react"
import { getTokenFromUrl } from "./spotify"
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./Player"
import { useDataLayerValue } from "./StateProvider"

const spotify = new SpotifyWebApi()

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    const _token = hash.access_token
    window.location.hash = "" // clears access token for security purposes

    if (_token) {
      spotify.setAccessToken(_token) // Gives access token to spotify web api

      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user
        })
      })
    }
  }, [])

  return (
    <div className="app">
      {/* Spotify Logo */}
      {/* Login w spotify button */}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  )
}

export default App
