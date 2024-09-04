import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/MovieSlice";
import { useEffect } from "react";
import { API_options } from "../utils/Constants";

const useMovieTrailer = (movieId) =>{
  const dispatch = useDispatch();

    const getMoviesTrailerVideo = async (  ) => {

        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_options
        );
        const jsonData = await data.json();
        const trailer = jsonData.results.filter((video)=> video.name === "Official Trailer")[0]
        console.log("trailer:" + trailer)
        dispatch(addTrailerVideo(trailer.key));
      };
    
    
      useEffect(() => {
        getMoviesTrailerVideo();
      }, []);
}

export default useMovieTrailer