import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Импортируем компоненты для маршрутизации
import Register from './components/auth/Register';  // Путь к компоненту регистрации
import HomePage from './pages/HomePage';  // Путь к странице HomePage

function App() {
  return (
    <Router>
      <Routes>
        {/* Маршрут для страницы регистрации */}
        <Route path="/register" component={Register} />
        
        {/* Маршрут для главной страницы */}
        <Route path="/" exact component={HomePage} />
      </Routes>
    </Router>
  );
}

export default App;

