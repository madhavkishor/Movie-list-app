import React, { useState, useCallback, useMemo } from 'react';
import MovieCard from './MovieCard';
import useMovies from '../hooks/useMovies';
import './MovieList.css';

const MovieList = ({ collectionId }) => {
  const { movies, loading, error, collectionInfo, retry } = useMovies(collectionId);
  
  // Virtual scrolling state
  const [scrollTop, setScrollTop] = useState(0);
  const ITEM_HEIGHT = 220; // Approximate height of each movie card with margin
  const VIEWPORT_HEIGHT = 600; // Visible area height
  const BUFFER_ITEMS = 5; // Number of extra items to render above and below visible area

  // Calculate visible items based on scroll position
  const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER_ITEMS);
  const endIndex = Math.min(movies.length, startIndex + Math.ceil(VIEWPORT_HEIGHT / ITEM_HEIGHT) + BUFFER_ITEMS * 2);

  const visibleMovies = useMemo(() => 
    movies.slice(startIndex, endIndex), 
    [movies, startIndex, endIndex]
  );

  const handleScroll = useCallback((e) => {
    setScrollTop(e.target.scrollTop);
  }, []);

  const totalHeight = movies.length * ITEM_HEIGHT;

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h3>Oops! Something went wrong</h3>
        <p>{error}</p>
        <button onClick={retry} className="retry-button">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="movie-list-container">
      {collectionInfo && (
        <div className="collection-header">
          <div className="collection-info">
            <h2>{collectionInfo.name}</h2>
            {collectionInfo.overview && (
              <p className="collection-overview">{collectionInfo.overview}</p>
            )}
          </div>
          {collectionInfo.posterPath && (
            <div className="collection-poster">
              <img 
                src={`https://image.tmdb.org/t/p/w300${collectionInfo.posterPath}`}
                alt={collectionInfo.name}
              />
            </div>
          )}
        </div>
      )}
      
      <div className="movie-list-header">
        <h3>Movies in Collection</h3>
        <span className="movie-count">{movies.length} movies</span>
      </div>
      
      {movies.length === 0 ? (
        <div className="no-movies">
          <p>No movies found in this collection.</p>
        </div>
      ) : (
        <div 
          className="movie-list-scroll-container"
          onScroll={handleScroll}
        >
          <div 
            className="movie-list-virtual"
            style={{ height: `${totalHeight}px` }}
          >
            {visibleMovies.map((movie, index) => {
              const actualIndex = startIndex + index;
              return (
                <div
                  key={movie.id}
                  className="movie-item-wrapper"
                  style={{
                    position: 'absolute',
                    top: `${actualIndex * ITEM_HEIGHT}px`,
                    width: '100%',
                    height: `${ITEM_HEIGHT}px`
                  }}
                >
                  <MovieCard 
                    movie={movie}
                    rank={actualIndex + 1}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;