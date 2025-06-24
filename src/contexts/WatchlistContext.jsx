import React, { createContext, useState } from 'react'

const WatchlistContext =createContext();

export const WatchlistContextProvider=({children})=> {
    const [watchlist,setWatchlist]=useState(JSON.parse(localStorage.getItem("watchlist")) || []);
    // const [watchlist,setWatchlist]=useState([]);
  return (
    <WatchlistContext.Provider value={{watchlist,setWatchlist}}>{children}</WatchlistContext.Provider>
  )
}

export default WatchlistContext
