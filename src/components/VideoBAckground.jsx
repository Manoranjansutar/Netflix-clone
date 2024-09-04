import React from "react";

import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBAckground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="z-50 w-screen pointer-events-none">
      <iframe
        className="top-0 left-0 w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${trailerVideo}&iv_load_policy=3&disablekb=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        autoplay
        muted
      ></iframe>
    </div>
  );
};

export default VideoBAckground;
