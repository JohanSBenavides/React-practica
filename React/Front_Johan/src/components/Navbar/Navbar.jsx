import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

// Normaliza texto para rutas
const normalizeText = (text) => text.toLowerCase().replace(/\s+/g, '-');

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  drawerList: {
    width: 250,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/* Icono de menú para dispositivos pequeños */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* Título */}
          <Typography variant="h6" className={classes.title}>
            SERVICIO NACIONAL DE APRENDIZAJE - SENA
          </Typography>
          {/* Espaciador */}
          <Box sx={{ flexGrow: 1 }} />
          {/* Botones de navegación para pantallas grandes */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {['Home', 'Cursos', 'Usuarios', 'Más Información'].map((text) => (
              <Button
                color="inherit"
                component={RouterLink}
                to={`/${normalizeText(text)}`}
                key={text}
              >
                {text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer para dispositivos pequeños */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <div
          className={classes.drawerList}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {['Home', 'Cursos', 'Usuarios', 'Más Información'].map((text) => (
              <ListItem
                button
                component={RouterLink}
                to={`/${normalizeText(text)}`}
                key={text}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
