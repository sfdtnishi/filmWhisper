import React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';

//3b8a5d6a

const API_url = "http://www.omdbapi.com/?i=tt3896198&apikey=3b8a5d6a"

// const movie1={
//     "Title": "Superman, Spiderman or Batman",
//     "Year": "2011",
//     "imdbID": "tt2084949",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
// }

const App = ()=>{
    

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const searchMovie = async(title)=>{
        const response = await fetch(`${API_url}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);


        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovie('Spiderman');
    },[]);

    return (
        <div className="app">
            <h1>FilmWhisperPro</h1>

            <div className="search">
                <input
                placeholder='Search what you want!' 
                value = {search}
                onChange={(e)=>{setSearch(e.target.value)}}  
                 />
                 <img src={SearchIcon} alt="Search" 
                 
                 onClick={()=>searchMovie(search)}
                 />
            </div>
            {
            movies?.length > 0 ?(
                <div className="container">
                    {
                        movies.map((movie)=>(
                            <MovieCard movie = {movie}/>
                        ))
                    }
    
                </div>

            ):(
                <div className="empty">
                    <h2>no movies found</h2>
                </div>
            )

            }     
        </div>
    );
}

export default App;