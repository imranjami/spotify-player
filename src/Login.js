import React from "react"
import "./Login.css"
import logo from "./images/Spotify_logo_with_text.svg"
import { loginUrl } from "./spotify"

function Login() {
  return (
    <div className="login">
      <img src={logo} />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  )
}

export default Login
