
import React from 'react';
import { Link } from 'react-router-dom';  // Импортируем Link
import { Button } from '@mui/material'; 

const HomePage = () => {
  return (
    <div>
      <h1>Добро пожаловать в MediaNest!</h1>
      <p>Это главная страница. Перейдите на страницу регистрации.</p>
      <Button variant="contained" color="primary">
        Пример кнопки
      </Button>
    </div>
  );
};

export default HomePage;
