import React, { useEffect } from 'react'
import Navbar from './Navbar'
import useNowPlayingMovies from './../hooks/useNowPlayingMovies.jsx';
import MainContainer from './MainContainer.jsx';
import SecondaryContainer from './SecondaryContainer.jsx';

const Browse = () => {
  useNowPlayingMovies();
  
  return (
    <div>
      <Navbar/>
      <MainContainer/>
      <SecondaryContainer />
    </div>
  )
}

export default Browse
