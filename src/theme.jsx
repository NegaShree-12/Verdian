import { createTheme } from '@mui/material/styles';

export const theme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: '#004d40' },
      secondary: { main: '#ffab00' },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  });

