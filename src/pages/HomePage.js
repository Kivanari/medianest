
import React from 'react';
import { Button, Link } from '@mui/material';  // Импортируем Link и Button

const HomePage = () => {
  return (
    <div>
      <h1>Добро пожаловать в MediaNest!</h1>
      
      <p>Перейдите на <Link to="/register">страницу регистрации</Link>.</p>
      <Button variant="contained" color="primary">
        Пример кнопки
      </Button>
    </div>
  );
};

export default HomePage;
