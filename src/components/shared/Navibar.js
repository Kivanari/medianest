import React, { useState } from 'react'; // Импорт React и хука useState для управления состоянием
import { useLocation } from 'react-router-dom'; // Импорт useLocation для получения текущего маршрута
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem, TextField, InputAdornment } from '@mui/material'; // Импорт компонентов Material-UI
import { Link } from 'react-router-dom'; // Импорт Link для навигации между страницами
import SearchIcon from '@mui/icons-material/Search'; // Импорт иконки поиска из Material-UI
import '../../styles/Navstyle.css'; // Импорт пользовательских стилей CSS

// Компонент Navbar принимает props: isAuthenticated (статус авторизации) и username (имя пользователя)
const Navbar = ({ isAuthenticated, username }) => {
  const [anchorEl, setAnchorEl] = useState(null); // Состояние для управления выпадающим меню (null = закрыто)
  const [searchQuery, setSearchQuery] = useState(''); // Состояние для хранения значения строки поиска
  const location = useLocation(); // Хук useLocation для определения текущего маршрута

  // Условие: скрываем Navbar, если текущий маршрут /login или /register
  if (location.pathname === '/login' || location.pathname === '/register') {
    return null; // Возвращаем null, чтобы не рендерить Navbar
  }

  // Функция для открытия выпадающего меню категорий
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); // Устанавливаем элемент, к которому привязано меню
  };

  // Функция для закрытия выпадающего меню категорий
  const handleMenuClose = () => {
    setAnchorEl(null); // Сбрасываем anchorEl, чтобы закрыть меню
  };

  return (
    // AppBar — шапка сайта, position="sticky" фиксирует её при прокрутке
    <AppBar position="sticky" className="MuiAppBar-root">
      {/* Toolbar — контейнер для содержимого шапки с настройками стилей через sx */}
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
        {/* Box для логотипа и кнопки категорий */}
        <Box className="logo">
          {/* Логотип MediaNest, ссылка на главную страницу */}
          <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
            <Link to="/" className="link">MediaNest</Link>
          </Typography>
          {/* Кнопка "Категории" для открытия выпадающего меню */}
          <Button
            color="inherit"
            onClick={handleMenuOpen}
            className="categoryButton"
          >
            Категории
          </Button>
          {/* Выпадающее меню с категориями */}
          <Menu
            anchorEl={anchorEl} // Элемент, к которому привязано меню
            open={Boolean(anchorEl)} // Открыто, если anchorEl не null
            onClose={handleMenuClose} // Закрываем меню при клике вне его
          >
            {/* Элемент меню для категории "Фильмы" */}
            <MenuItem onClick={handleMenuClose} className="menuItem">
              <Link to="/movies" className="link">Фильмы</Link>
            </MenuItem>
            {/* Элемент меню для категории "Книги" */}
            <MenuItem onClick={handleMenuClose} className="menuItem">
              <Link to="/books" className="link">Книги</Link>
            </MenuItem>
            {/* Элемент меню для категории "Сериалы" */}
            <MenuItem onClick={handleMenuClose} className="menuItem">
              <Link to="/series" className="link">Сериалы</Link>
            </MenuItem>
          </Menu>
        </Box>

        {/* Box для строки поиска */}
        <Box className="searchBox">
          {/* Поле ввода для поиска */}
          <TextField
            variant="outlined" // Вариант оформления поля
            size="small" // Размер поля
            fullWidth // Растягиваем на всю ширину контейнера
            placeholder="Поиск..." // Текст-заполнитель
            value={searchQuery} // Значение поля связано с состоянием
            onChange={(e) => setSearchQuery(e.target.value)} // Обновляем состояние при вводе
            InputProps={{
              startAdornment: ( // Добавляем иконку поиска слева
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white' }} /> {/* Белая иконка поиска */}
                </InputAdornment>
              ),
            }}
            className="searchField" // Применяем пользовательский CSS-класс
          />
        </Box>

        {/* Box для кнопки входа или имени пользователя */}
        <Box sx={{ marginLeft: 2 }}>
          {isAuthenticated ? ( // Условие: если пользователь авторизован
            <Button className="loginButton">{username}</Button> // Показываем имя пользователя
          ) : ( // Если не авторизован
            <Link to="/login" className="link">
              <Button className="loginButton">Войти</Button> 
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; // Экспортируем компонент Navbar