import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./assets/search.svg";
import MovieCard from "./components/MovieCard";


const API_URL = "http://www.omdbapi.com?apikey=ac1a6f99";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // fetch the API and store it into a json file then into data
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    // .Search gives an array of the movie as checked in console using console.log(data.Search)
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <div className="app">
      <h1>Movie Search</h1>

      <div className="search">
        {/* Take input and set it to the state */}
        <input
          value={searchTerm}
          placeholder="Search for movies"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* On click will search the movie entered */}
        <img 
          src={SearchIcon} 
          alt="search" 
          onClick={() => searchMovies(searchTerm)} 
        />
      </div>

      {/* if theres a movie then populate it using map() to movies */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : ( 
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div>
  );
};

export default App;
