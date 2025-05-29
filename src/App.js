import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/Navibar'; // Шапка
import LoginPage from './pages/LoginPage'; // Страница входа
import RegisterPage from './pages/RegisterPage'; // Страница регистрации
import HomePage from './pages/HomePage'; // Главная страница

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar отображается на всех маршрутах */}
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<HomePage />} />
        {/* Страница входа */}
        <Route path="/login" element={<LoginPage />} />
        {/* Страница регистрации */}
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;