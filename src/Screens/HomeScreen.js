import React from "react";
import "./HomeScreen.css";
import NavBar from "../Nav";
import Banner from "../Banner";
import request from "../Request";
import Row from "../Row";

function HomeScreen() {
  return (
    <div className="home-screen">
      <NavBar/>
      <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentries" fetchUrl={request.fetchDocumentries} />
    </div>
  );
}

export default HomeScreen;
