import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Используем Routes вместо Switch
import Register from './components/auth/Register';  // Путь к компоненту регистрации
import HomePage from './pages/HomePage';  // Путь к странице HomePage

function App() {
  return (
    <Router>
      <Routes>
        
        {/* Маршрут для страницы регистрации */}
        <Route path="/register" element={<Register />} />
        
        {/* Маршрут для главной страницы */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

