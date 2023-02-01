import styled from 'styled-components';
import { Container } from './container';
import { TypographyVariant, Typography } from '../elements/typography';

const StyledSection = styled(Container).attrs({
  as: 'section'
})`
  display: grid;
  gap: 24px;
`;

const StyledTitle = styled(Typography).attrs({
  as: 'h2',
  variant: TypographyVariant.TITLE_2
})``;

function Section({ className, title, children }) {
  return (
    <StyledSection className={className}>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledSection>
  );
}

export { Section };
