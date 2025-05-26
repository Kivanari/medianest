import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Для маршрутов
import Navbar from './components/shared/Navbar';  // Импортируем Navbar
import Register from './components/auth/Register';  // Страница регистрации
import HomePage from './pages/HomePage';  // Главная страница

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  // Проверяем авторизацию пользователя при загрузке приложения
  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      setIsAuthenticated(true);
      setUsername(storedUser);
    }
  }, []);

  const handleLogin = (username) => {
    localStorage.setItem('username', username);  // Сохраняем имя пользователя в LocalStorage
    setIsAuthenticated(true);
    setUsername(username);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} username={username} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register handleLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
