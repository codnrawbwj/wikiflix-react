import { useState, useEffect } from 'react';
import "./App.css"
import MovieCard from './MovieCard';

import SearchIcon from './searchIcon.svg';

const myAPI = 'edcc968e';
const API_URL = 'http://www.omdbapi.com/?apikey=' + myAPI;

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
        console.log(movies[0])
    }

    useEffect(() => {
        searchMovie('Guardians of the Galaxy');
    },[]);

    return (
        <div className='app'>
            <h1>WIKI-FLIX</h1>

            <div className='searchBox'>
                <input 
                    type='text' 
                    placeholder='Search for titles'
                    value={searchTerm}
                    onChange={(event)=> setSearchTerm(event.target.value)}>
                </input>
                <img src={SearchIcon} alt='search'
                onClick={() => searchMovie(searchTerm)}>
                </img>
            </div>

            {
                movies?.length > 0
                ? (
                    <div className='container'>
                    {
                        movies.map((movie)=> (
                            <MovieCard movie={movie}/>
                        ))
                    }
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    )
}

export default App;