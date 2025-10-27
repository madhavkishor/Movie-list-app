import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useMovies = (collectionId) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [collectionInfo, setCollectionInfo] = useState(null);

  // TMDB API configuration
  const API_KEY = '11661a99f54cf368025014cbe5917c39';
  const BASE_URL = 'https://api.themoviedb.org/3';

  const fetchCollection = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get(
        `${BASE_URL}/collection/${collectionId}`,
        {
          params: {
            api_key: API_KEY,
            language: 'en-US'
          }
        }
      );
      
      setMovies(response.data.parts || []);
      setCollectionInfo({
        name: response.data.name,
        overview: response.data.overview,
        posterPath: response.data.poster_path
      });
    } catch (err) {
      console.error('Error fetching movies:', err);
      if (err.response?.status === 404) {
        setError(`Collection with ID ${collectionId} not found.`);
      } else if (err.response?.status === 401) {
        setError('Invalid API key. Please check your TMDB API key.');
      } else {
        setError('Failed to fetch movies. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  }, [collectionId, API_KEY]);

  useEffect(() => {
    fetchCollection();
  }, [fetchCollection]);

  const retry = () => {
    fetchCollection();
  };

  return {
    movies,
    loading,
    error,
    collectionInfo,
    retry
  };
};

export default useMovies;