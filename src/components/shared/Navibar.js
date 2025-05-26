import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem, TextField, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';  // Для навигации между страницами
import SearchIcon from '@mui/icons-material/Search';  // Иконка поиска
import '../../styles/Navstyle.css'; // Подключаем CSS файл с общими стилями

const Navbar = ({ isAuthenticated, username }) => {
  const [anchorEl, setAnchorEl] = useState(null);  // Для управления выпадающим меню категорий
  const [searchQuery, setSearchQuery] = useState(''); // Для строки поиска

  // Открытие меню категорий
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Закрытие меню категорий
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    // Шапка сайта
    <AppBar position="sticky" className="MuiAppBar-root">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
        {/* Логотип */}
        <Box className="logo">
          <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
            <Link to="/" className="link">MediaNest</Link> {/* Применяем класс для белого цвета */}
          </Typography>

          {/* Кнопка "Категории" */}
          <Button
            color="inherit"
            onClick={handleMenuOpen}
            className="categoryButton"
          >
            Категории
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose} className="menuItem">
              <Link to="/movies" className="link">Фильмы</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} className="menuItem">
              <Link to="/books" className="link">Книги</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} className="menuItem">
              <Link to="/series" className="link">Сериалы</Link>
            </MenuItem>
          </Menu>
        </Box>

        {/* Строка поиска */}
        <Box className="searchBox">
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Поиск..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white' }} /> {/* Белая иконка поиска */}
                </InputAdornment>
              ),
            }}
            className="searchField"  // Применяем CSS класс
          />
        </Box>

        {/* Кнопка "Войти" */}
        <Box sx={{ marginLeft: 2 }}>
          {isAuthenticated ? (
            <Button className="loginButton">{username}</Button>  // Если авторизован, показываем имя пользователя
          ) : (
            <Link to="/login" className="link">
              <Button className="loginButton">Войти</Button>  {/* Кнопка Войти без квадрата */}
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
