import { useMemo } from 'react';
import { Theme } from '../theme';

const useMockProducts = (theme = Theme.LIGHT) => {
  const products = useMemo(
    () => [
      {
        name: 'Оправа Seiko',
        price: '15 000 ₽',
        image: theme === Theme.LIGHT ? '/images/products/1-light.jpg' : '/images/products/1-dark.jpg',
        imageAlt: 'Круглая чёрная оправа с серебристыми и золотистыми элементами',
        hit: true,
        novelty: true,
        unavailable: false
      },
      {
        name: 'Оправа Max Mara',
        price: '20 000 ₽',
        image: theme === Theme.LIGHT ? '/images/products/2-light.jpg' : '/images/products/2-dark.jpg',
        imageAlt: 'Чёрная оправа с золотистыми элементами формы «кошачий глаз»',
        hit: false,
        novelty: false,
        unavailable: false
      },
      {
        name: 'Оправа Fossil',
        price: '18 000 ₽',
        image: theme === Theme.LIGHT ? '/images/products/3-light.jpg' : '/images/products/3-dark.jpg',
        imageAlt: 'Прямоугольная чёрная оправа с жёлтыми элементами',
        hit: false,
        novelty: true,
        unavailable: false
      },
      {
        name: 'Оправа Ray-Ban',
        price: '24 000 ₽',
        image: theme === Theme.LIGHT ? '/images/products/4-light.jpg' : '/images/products/4-dark.jpg',
        imageAlt: 'Полуободковая чёрная оправа',
        hit: true,
        novelty: false,
        unavailable: false
      },
      {
        name: 'Оправа Rolph',
        price: '20 000 ₽',
        image: theme === Theme.LIGHT ? '/images/products/5-light.jpg' : '/images/products/5-dark.jpg',
        imageAlt: 'Чёрная оправа с бордовыми элементами формы «трапеция»',
        hit: true,
        novelty: true,
        unavailable: true
      },
      {
        name: 'Оправа Gucci',
        price: '38 000 ₽',
        image: theme === Theme.LIGHT ? '/images/products/6-light.jpg' : '/images/products/6-dark.jpg',
        imageAlt: 'Бордовая оправа формы «кошачий глаз»',
        hit: true,
        novelty: true,
        unavailable: true
      }
    ],
    [theme]
  );

  return products;
};

export { useMockProducts };
