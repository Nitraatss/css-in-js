import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from './theme';
import { DefaultLayout } from './layouts/default';
import { IndexPage } from './pages/index';
import { CatalogPage } from './pages/catalog';

import { GlobalFonts } from './tokens/fonts';
import { GlobalColors } from './tokens/colors';
import { GlobalGradients } from './tokens/gradients';
import { GlobalShadows } from './tokens/shadows';
import { GlobalResets } from './tokens/resets';
import { SpriteWithIcons } from './tokens/icons';

function App() {
  const [theme, setTheme] = useState(Theme.LIGHT);
  const toggleTheme = () => setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);

  return (
    <ThemeProvider theme={{ current: theme, toggleTheme }}>
      <GlobalFonts />
      <GlobalColors />
      <GlobalGradients />
      <GlobalShadows />
      <GlobalResets />

      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<IndexPage />} />
          <Route path='catalog' element={<CatalogPage />} />
        </Route>
      </Routes>

      <SpriteWithIcons />
    </ThemeProvider>
  );
}

export { App };
