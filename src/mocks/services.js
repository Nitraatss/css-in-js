import { useMemo } from 'react';

const useMockServices = () => {
  const services = useMemo(
    () => [
      {
        name: 'Проверка зрения',
        image: '/images/services/1.jpg',
        imageAlt: 'Очки для проверки остроты зрения'
      },
      {
        name: 'Осмотр врачом',
        image: '/images/services/2.jpg',
        imageAlt: 'Авторефкератометр'
      },
      {
        name: 'Подбор линз',
        image: '/images/services/3.jpg',
        imageAlt: 'Линза и пинцет'
      }
    ],
    []
  );

  return services;
};

export { useMockServices };
