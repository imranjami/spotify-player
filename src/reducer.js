export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  // token: null
  token:
    "BQC4fRgJV1z3T_wK7eH0qBlnOVcLuJBw_jpac9zRQpSvySs7dcDgKKwoiFKmRhdx_CuUfav8DT0ZLDO13A3G9xDhgZD0ZWXXTZLpY9zpvOAnPVgzLp_AIUEWqc6qtruNM6K_l6f6_SMBtTxY7yjrD2yIXkKDfWQ"
}

const reducer = (state, action) => {
  console.log("action:", action)

  // action = {type, [payload]}
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      }
    default:
      return state
  }
}

export default reducer
