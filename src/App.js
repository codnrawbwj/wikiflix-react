import { useEffect } from 'react';
import "./App.css"

const myAPI = 'edcc968e';
const API_URL = 'http://www.omdbapi.com/?apikey=' + myAPI;
const poster_URL = 'http://img.omdbapi.com/?apikey=' + myAPI;

const App = () => {

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search)
    }

    useEffect(() => {
        searchMovie('Guardians of the Galaxy');
    },[]);

    return (
        <>
            <div className='header'>
                <h1>Wiki-Flix</h1>
            </div>
            <div className='searchBox'>
                <input 
                    type='text' 
                    placeholder='Search for titles'
                    value=""
                    onChange={()=>{}}>
                </input>
            </div>
        </>
    )
}

export default App;