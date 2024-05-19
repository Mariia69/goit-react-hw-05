import './App.css'
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";
const HomePage = lazy(() => import('./pages/Homepage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
import MovieReviews from './components/MovieReviews/MovieReviews';
import MovieCast from './components/MovieCast/MovieCast';




function App() {
  return (  
    <>
      <div>
        <Suspense fallback="loadin...">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:filmId' element={<MovieDetailsPage />} >
            <Route path='cast' element={<MovieCast/>} />
            <Route path='reviews' element={<MovieReviews/> } />
          </Route>
          <Route path='*' element={<NotFoundPage/> } />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

export default App