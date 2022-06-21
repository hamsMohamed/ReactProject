import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios config/axiosInstace";
import { useSelector } from 'react-redux';
const Movie = () => {
    const image ="https://image.tmdb.org/t/p/w500/";
    const [movies, setMovie] = useState([]);
    const LoaderState= useSelector((state)=>state.loader.isLoading)
    const [page,setPage]=useState(1);

    useEffect(() => {
        axiosInstance
            .get(`movie/popular?&page=${page}`)
            .then((res) => {
               
                setMovie(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [page]);


    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-4">

                {LoaderState && <div className="d-flex justify-content-center">
                    <div className="spinner-border " role="status"></div>
                </div>}


                {movies.map((movie) => {
                    return (
                        <div className="col" >
                            <div className="card">
                                <img
                                    src={image+movie.backdrop_path}
                                    style={{ height: "200px" }}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.description}</p>
                                    <Link to={`/details/${movie.id}`}>Details</Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="justify-content-evenly d-flex p-5 mx-5" style={{backgroundColor:"black"}}>
              <button className="btn btn-outline-light mx-3" onClick={()=>setPage(page-1)}>Previous</button> 
              <button className="btn btn-outline-light mx-3" onClick={()=>setPage(page+1)}>Next</button>    
            </div>
        </>
    );
};

export default Movie;