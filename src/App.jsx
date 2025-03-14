import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import AddMoviePage from './pages/AddMoviePage';

// Importazione layout
import DefaultLayout from './layouts/DefaultLayout';

// Importazione parte di gestione rotte
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/movies/add" element={<AddMoviePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
