import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from '../../axios config/axiosInstace';
const MovieDetails = () => {
    const location = useLocation();
    const params = useParams();

    const [movie, setMovie] = useState({});
    useEffect(() => {
      axiosInstance
        .get(`/movie/${params.id}`)
        .then((res) => {
          setMovie(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    return(
        <>
          <h2>{movie.title}</h2>
          <img src={movie.image} />
        </>
    );
};  
export default MovieDetails;