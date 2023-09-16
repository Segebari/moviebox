import React, { useState, useEffect } from 'react';

function Featured() {
  const [movies, setMovies] = useState([]);
  const apiKey = 'c4a1a64fb3de49d2bb03df492eb77dcb'; // Your TMDB API Key

  useEffect(() => {
    // Function to fetch top 10 movies
    const fetchTopMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        // Check if data.results exists and is an array
        if (Array.isArray(data.results)) {
          const topMovies = data.results.slice(0, 10); // Get the top 10 movies
          setMovies(topMovies);
        } else {
          console.error('No results found or results is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTopMovies();
  }, [apiKey]);

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-release-date">Release Date: {movie.release_date}</p>
        </div>
      ))}
    </div>
  );
}

export default Featured;
