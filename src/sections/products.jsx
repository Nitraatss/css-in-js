import styled, { useTheme } from 'styled-components';
import { ContainerMixin } from '../helpers/container';
import { VisuallyHiddenMixin } from '../helpers/visually-hidden';
import { CardsList } from '../helpers/cards-list';
import { Button } from '../elements/button';
import { ProductCard } from '../components/product-card';
import { useMockProducts } from '../mocks/products';

const StyledProducts = styled.section`
  ${ContainerMixin}

  display: grid;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

const StyledTitle = styled.h2`
  ${VisuallyHiddenMixin}
`;

const StyledShowMoreButton = styled(Button)`
  justify-self: center;
`;

function Products({ className }) {
  const { current } = useTheme();
  const products = useMockProducts(current);

  return (
    <StyledProducts className={className}>
      <StyledTitle>Товары</StyledTitle>
      <CardsList>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </CardsList>
      <StyledShowMoreButton>Показать ещё</StyledShowMoreButton>
    </StyledProducts>
  );
}

export { Products };
