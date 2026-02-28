import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { FavoritesProvider } from './pages/Favorites/FavoritesContext.jsx';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Movie from './pages/Movie/Movie.jsx';
import Favorites from './pages/Favorites/Favorites.jsx';
import Search from './pages/Search.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/movie/:id",
        element: <Movie />
      },
      {
        path: "/favorites",
        element: <Favorites />
      },
      {
        path: "/search",
        element: <Search />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesProvider>
      <RouterProvider router={router}/>
    </FavoritesProvider>
  </StrictMode>,
)
