import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem, TextField, InputAdornment, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';  // Для навигации между страницами
import SearchIcon from '@mui/icons-material/Search';  // Иконка поиска
import AccountCircleIcon from '@mui/icons-material/AccountCircle';  // Иконка профиля

const Navbar = ({ isAuthenticated, username }) => {
  const [anchorEl, setAnchorEl] = useState(null);  // Для управления выпадающим меню
  const [searchQuery, setSearchQuery] = useState(''); // Для строки поиска
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null); // Для управления меню профиля

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#333' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Логотип */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>MediaNest</Link>
          </Typography>
        </Box>

        {/* Строка поиска */}
        <Box sx={{ width: '50%' }}>
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
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ backgroundColor: 'white' }}
          />
        </Box>

        {/* Кнопка "Категории" */}
        <Button
          color="inherit"
          onClick={handleMenuOpen}
        >
          Категории
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Фильмы</MenuItem>
          <MenuItem onClick={handleMenuClose}>Книги</MenuItem>
          <MenuItem onClick={handleMenuClose}>Сериалы</MenuItem>
        </Menu>

        {/* Профиль */}
        <Box sx={{ marginLeft: 2 }}>
          {isAuthenticated ? (
            <Button color="inherit">{username}</Button>  // Если авторизован, показываем имя пользователя
          ) : (
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button color="inherit">Войти</Button>  {/* Кнопка Войти, если не авторизован */}
            </Link>
          )}
          {/* Иконка профиля */}
          <IconButton
            color="inherit"
            onClick={handleProfileMenuOpen}
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            anchorEl={profileMenuAnchorEl}
            open={Boolean(profileMenuAnchorEl)}
            onClose={handleProfileMenuClose}
          >
            <MenuItem onClick={handleProfileMenuClose}>Мой профиль</MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>Выход</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
