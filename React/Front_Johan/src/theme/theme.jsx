import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // Paleta de colores
    primary: {
      main: '#39A900', // Color verde institucional
    },
    secondary: {
      main: '#007832', // Color secundario
    },
    error: {
      main: '#F44336', // Color de error
    },
    background: {
      default: '#FFFFFF', // Color de fondo por defecto
    },
  },
  typography: {
    // Configuraciones de tipografía
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  spacing: 8, // Define la unidad de espaciado
  shape: {
    borderRadius: 4, // Define el radio de las esquinas de los elementos
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    // Personalización de componentes
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Desactiva la capitalización automática de los botones
        },
      },
    },
  },
});

export default theme;