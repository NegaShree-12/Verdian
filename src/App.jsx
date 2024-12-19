import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useThemeStore } from './store/themeStore';
import { theme } from './theme';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import InvestmentApproach from './pages/InvestmentApproach';
import ContactUs from './pages/ContactUs';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <ThemeProvider theme={theme(darkMode)}>
      <CssBaseline />
      <Header />
      <Navbar />
      <main>
        <Home />
        <AboutUs />
        <OurTeam />
        <InvestmentApproach />
        <ContactUs />
      </main>
    </ThemeProvider>
  );
};

export default App;
