/* 
Using Spotify's API for autorization below:

- what is the radio playing in a given year
- 

*/

export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri = "http://localhost:3000/"

const clientId = "c9cfde18cf284443a0b28d1a3e8c8a01"

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
]

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`

// localhost:3000/#access_token=BQB194zEJs91i6CTFX7iC0KpCqrs8xLT-Fg3kAqYrAzS35Fn-FyWEDJogNHJTuepMCF3Gll684_etrSIh7AXqD84aBETkp3C4p93d4t44sExKg59OSZYiORNLChFE_7Z1fAlvqMSxXsRpw71aTFStFksfC2nthM&token_type=Bearer&expires_in=3600

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=")
      initial[parts[0]] = decodeURIComponent(parts[1])

      return initial
    }, {})
}
