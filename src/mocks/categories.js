import { useMemo } from 'react';

const useMockCategories = () => {
  const categories = useMemo(
    () => [
      {
        name: 'Оправы',
        image: '/images/categories/1.svg'
      },
      {
        name: 'Линзы',
        image: '/images/categories/2.svg'
      },
      {
        name: 'Очки',
        image: '/images/categories/3.svg'
      }
    ],
    []
  );

  return categories;
};

export { useMockCategories };
