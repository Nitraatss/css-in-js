import { useMemo } from 'react';
import { Theme } from '../theme';

const useMockBanners = (theme = Theme.LIGHT) => {
  const banner = useMemo(
    () => ({
      title: 'Бесплатная консультация окулиста',
      text: 'При покупке оправы Ray-Ban или Seiko от 15 000 рублей',
      image: theme === Theme.LIGHT ? '/images/banners/1-light.jpg' : '/images/banners/1-dark.jpg'
    }),
    [theme]
  );

  return banner;
};

export { useMockBanners };
