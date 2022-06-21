import React from "react";
import { useHistory } from "react-router-dom";
const Home = () => {

    const history = useHistory();
    const redirectToMovies = () => {

      history.push("/movies");
      
    };

    return(
        <>
          <h1>Home</h1>
          <button className="btn btn-dark" onClick={() => redirectToMovies()}>
           show Movies
          </button>
        </>
    );
};

export default Home;