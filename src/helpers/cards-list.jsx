import { Children } from 'react';
import styled from 'styled-components';

const StyledCardsList = styled.ul`
  display: grid;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }
`;

const StyledCardsItem = styled.li`
  display: grid;
`;

function CardsList({ className, children }) {
  return (
    <StyledCardsList className={className}>
      {Children.map(children, (child) => (
        <StyledCardsItem>{child}</StyledCardsItem>
      ))}
    </StyledCardsList>
  );
}

export { CardsList };
