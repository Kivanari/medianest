import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navibar from './components/shared/Navibar';  // Импортируем шапку
import LoginPage from './pages/LoginPage';  // Страница входа
import RegisterPage from './pages/RegisterPage';  // Страница регистрации
import HomePage from './pages/HomePage';  // Главная страница

function App() {
  return (
    <Router>
      <Navibar /> {/* Шапка должна быть здесь */}

      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<HomePage />} />

        {/* Страница входа */}
        <Route path="/login" element={<LoginPage />} />

        {/* Страница регистрации */}
        <Route path="/register" element={<RegisterPage />} />

        {/* <Route path="/info" element={<InfoPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
