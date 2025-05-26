import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';  // Для навигации между страницами

const Navbar = ({ isAuthenticated, username }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>MediaNest</Link>
          </Typography>
        </Box>
        <Box>
          {isAuthenticated ? (
            <Button color="inherit">
              {username} {/* Показываем имя пользователя */}
            </Button>
          ) : (
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button color="inherit">Войти</Button> {/* Кнопка для перехода на страницу входа */}
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
