import { createGlobalStyle } from 'styled-components';

const Shadow = {
  HEADER_LIGHT: 'var(--shadow-header-light)',
  CARD_DEFAULT_LIGHT: 'var(--shadow-card-default-light)',
  CARD_HOVER_OR_FOCUS: 'var(--shadow-card-hover-or-focus)'
};

const GlobalShadows = createGlobalStyle`
  :root {
    --shadow-header-light: 0 2px 20px rgba(0, 0, 0, 0.08);
    --shadow-card-default-light: 0 0 10px rgba(0, 0, 0, 0.07);
    --shadow-card-hover-or-focus: 0 0 10px rgba(86, 170, 247, 0.25);
  }
`;

export { Shadow, GlobalShadows };
