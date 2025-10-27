# 🎬 Movie Collection App

A modern React application that displays movie collections using The Movie Database (TMDB) API with virtual scrolling implementation.

## 🌟 Features

- **Virtual Scrolling** - Efficient RecyclerView-like implementation for smooth performance
- **TMDB API Integration** - Fetches real movie data from The Movie Database
- **Multiple Collections** - Switch between different movie collections
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI** - Glass morphism design with beautiful animations
- **Performance Optimized** - Lazy loading and efficient rendering

## 🛠️ Tech Stack

- **Frontend:** React 18
- **Styling:** CSS3 with Glass Morphism
- **API:** The Movie Database (TMDB) API
- **Build Tool:** Vite
- **Package Manager:** npm

## 📋 Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- TMDB API key

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/madhavkishor/Movie-list-app.git
cd movie-list-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

The app will open at `http://localhost:3000`

## 🎯 Project Structure

```
movie-list-app/
├── src/
│   ├── components/
│   │   ├── MovieList.jsx     # Main movie list with virtual scrolling
│   │   ├── MovieList.css
│   │   ├── MovieCard.jsx     # Individual movie card component
│   │   └── MovieCard.css
│   ├── hooks/
│   │   └── useMovies.js      # Custom hook for API calls
│   ├── App.jsx               # Main application component
│   ├── App.css               # Global styles
│   └── main.jsx              # Application entry point
├── package.json
└── vite.config.js
```

## 🔧 Configuration

### TMDB API Setup
1. Get your free API key from [The Movie Database](https://www.themoviedb.org/settings/api)
2. The API key is already configured in `src/hooks/useMovies.js`

### Available Collections
- Star Wars Collection
- The Avengers Collection  
- Pirates of the Caribbean Collection
- Back to the Future Collection
- James Bond Collection

## 🎨 Key Features Explained

### Virtual Scrolling (RecyclerView Equivalent)
- Implements efficient rendering of large lists
- Only renders visible items + buffer for smooth scrolling
- Performance optimized with React hooks

### API Integration
- Uses TMDB Collections API endpoint
- Fetches movie data with proper error handling
- Implements loading states and retry mechanism

### Responsive Design
- Mobile-first approach
- Flexible grid layout
- Optimized for all screen sizes

## 📱 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting service

## 🔍 API Reference

This project uses [The Movie Database API](https://developers.themoviedb.org/3/collections/get-collection-details)

### Endpoint Used
```
GET /collection/{collection_id}
```

### Parameters
- `api_key` (string, required) - Your TMDB API key
- `language` (string, optional) - Language for results

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the API
- React team for the amazing framework
- Vite for fast build tooling

## 📞 Contact

Madhav Kishor - [GitHub](https://github.com/madhavkishor)

Project Link: [https://github.com/madhavkishor/Movie-list-app](https://github.com/madhavkishor/Movie-list-app)

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

**Built with ❤️ using React and TMDB API**
