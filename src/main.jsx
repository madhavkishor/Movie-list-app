import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Remove initial loading once React loads
document.addEventListener('DOMContentLoaded', () => {
  const loadingElement = document.querySelector('.initial-loading');
  if (loadingElement) {
    loadingElement.remove();
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)