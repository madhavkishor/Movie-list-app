import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, rank }) => {
  const {
    title,
    poster_path,
    release_date,
    vote_average,
    overview,
    vote_count
  } = movie;

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';
  const releaseYear = release_date ? new Date(release_date).getFullYear() : 'N/A';
  
  const truncatedOverview = overview 
    ? (overview.length > 120 ? overview.substring(0, 120) + '...' : overview)
    : 'No description available.';

  const formatVoteCount = (count) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count;
  };

  return (
    <div className="movie-card">
      {rank && (
        <div className="movie-rank">
          #{rank}
        </div>
      )}
      
      <div className="movie-poster">
        {poster_path ? (
          <img 
            src={`${IMAGE_BASE_URL}${poster_path}`}
            alt={title}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div className={`no-poster ${poster_path ? 'hidden' : ''}`}>
          🎬
          <span>No Poster</span>
        </div>
      </div>
      
      <div className="movie-info">
        <div className="movie-header">
          <h3 className="movie-title" title={title}>{title}</h3>
          <div className="movie-year">{releaseYear}</div>
        </div>
        
        <div className="movie-rating">
          <div className="rating-badge">
            <span className="rating-star">⭐</span>
            <span className="rating-value">
              {vote_average ? vote_average.toFixed(1) : 'N/A'}
            </span>
            {vote_count > 0 && (
              <span className="rating-count">
                ({formatVoteCount(vote_count)})
              </span>
            )}
          </div>
        </div>
        
        <p className="movie-overview">{truncatedOverview}</p>
        
        <div className="movie-footer">
          <button className="details-button">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;