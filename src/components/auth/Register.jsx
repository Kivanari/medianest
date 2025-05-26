import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';  // Импортируем компоненты Material-UI
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebas/firebase';  // Путь к файлу firebase.js, где настроен Firebase

const Register = () => {
  // Состояние для хранения email, пароля и ошибок
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    // Создаем пользователя через Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User registered:', user);  // Логируем информацию о зарегистрированном пользователе
      })
      .catch((error) => {
        setError(error.message);  // Отображаем ошибку, если регистрация не удалась
      });
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>Регистрация</Typography>
      {/* Отображаем сообщение об ошибке, если оно есть */}
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSubmit}>
        {/* Поле для ввода email */}
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        {/* Поле для ввода пароля */}
        <TextField
          label="Пароль"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        {/* Кнопка для отправки формы */}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Container>
  );
};

export default Register;
