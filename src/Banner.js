import React,{useState, useEffect} from "react";
import "./Banner.css";
import axios from "./axios"
import Request from "./Request"

function Banner() {
    const [movie, setMovie]=useState([])

    useEffect(() =>{
        async function fetchData(){
            const result = await axios.get(Request.fetchNetflixOriginals);
            setMovie(result.data.results[
                Math.floor(Math.random()*result.data.results.length-1)
            ]);
            return result;

        }
        fetchData();
    },[])

    console.log(movie)


  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgoroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original } </h1>
        <div className="banner__buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
 