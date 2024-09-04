import { useDispatch } from "react-redux"
import { API_options } from "../utils/Constants"
import { addNowPlayingMovies } from "../utils/MovieSlice"
import { useEffect } from "react"

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch()
    const getNowPlayingMovies = async () => {
       const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_options)
       const json = await data.json()
    //    console.log(json.results)
       dispatch(addNowPlayingMovies(json.results))
    } 
  
    useEffect(()=>{
      getNowPlayingMovies()
    },[])
}

export default useNowPlayingMovies