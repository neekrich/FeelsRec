import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Playlist from './Playlist'
import Controls from './Controls'
import Title from './Title'
import Instructions from './Instructions'
import { SearchContext, defaultParams } from './SearchContext'
import './App.css'


function Body() {

  const [params, setParams] = useState(defaultParams)

  return (
      <div className="Body"> 
        <SearchContext.Provider value={{params, setParams}}>
          <Title variant="icon"/>
          <SearchBar />
          <Instructions/>
          <Controls />
          <Playlist />
        </SearchContext.Provider>
      </div>
  )
}

export default Body;