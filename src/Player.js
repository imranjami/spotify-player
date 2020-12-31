import React from "react"
import "./Player.css"
import Sidebar from "./Sidebar"

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        {/* SIDEBAR */}
        <Sidebar />
        {/* BODY */}
      </div>

      {/* FOOTER */}
      <p>Welcome to Spotify</p>
    </div>
  )
}

export default Player
