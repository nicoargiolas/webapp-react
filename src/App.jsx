import HomePage from './pages/HomePage';

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
