import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Для навигации на другую страницу
import '../styles/auth.css';
const Register = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Хук для навигации

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика регистрации (в этом примере просто сохраняем username)
    handleLogin(username);
    navigate('/');  // Перенаправляем на главную страницу
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>Регистрация</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Логин (никнейм)"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Пароль"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Container>
  );
};

export default Register;
