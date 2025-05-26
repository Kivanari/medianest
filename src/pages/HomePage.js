import React from 'react';
import { Button } from '@mui/material';  // Импортируем Button из Material-UI
import { Link } from 'react-router-dom';  // Импортируем Link из react-router-dom для навигации

const HomePage = () => {
  return (
    <div>
      <h1>Добро пожаловать в MediaNest!</h1>
      
      {/* Используем Link из react-router-dom для перехода */}
      <p>Перейдите на <Link to="/register">страницу регистрации</Link>.</p>
      <Button variant="contained" color="primary">
        Пример кнопки
      </Button>
    </div>
  );
};

export default HomePage;
