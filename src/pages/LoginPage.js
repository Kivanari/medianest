import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';  // Для навигации на другие страницы
import '../styles/auth.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');  // Состояние для ввода email
  const [password, setPassword] = useState('');  // Состояние для ввода пароля

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика отправки формы для авторизации
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
        <Typography variant="h5">Войти в MediaNest</Typography>

        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 1 }}>
          {/* Поле для ввода email */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Поле для ввода пароля */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Кнопка "Войти" */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ backgroundColor: '#333', marginTop: 3 }}
          >
            Войти
          </Button>

          {/* Ссылка на страницу регистрации */}
          <Link to="/register" style={{ textDecoration: 'none', display: 'block', textAlign: 'center', marginTop: 2 }}>
            <Typography variant="body2" color="info">
              Еще нет аккаунта? Зарегистрироваться
            </Typography>
          </Link>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
