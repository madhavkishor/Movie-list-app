import React, { useState } from 'react'
import MovieList from './components/MovieList'
import './App.css'

function App() {
  const [currentCollection, setCurrentCollection] = useState(10); 

  const collections = [
    { id: 10, name: 'Star Wars Collection' },
    { id: 86311, name: 'The Avengers Collection' },
    { id: 295, name: 'Pirates of the Caribbean Collection' },
    { id: 264, name: 'Back to the Future Collection' },
    { id: 748, name: 'James Bond Collection' }
  ];

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1>🎬 Movie Collections</h1>
          <p>Discover amazing movie collections from TMDB</p>
          
          <div className="collection-selector">
            <label htmlFor="collection-select">Choose a Collection:</label>
            <select 
              id="collection-select"
              value={currentCollection} 
              onChange={(e) => setCurrentCollection(parseInt(e.target.value))}
            >
              {collections.map(collection => (
                <option key={collection.id} value={collection.id}>
                  {collection.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>
      
      <main className="main-content">
        <MovieList collectionId={currentCollection} />
      </main>
      
      <footer className="app-footer">
        <p>Powered by <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">The Movie Database</a></p>
      </footer>
    </div>
  )
}

export default App
