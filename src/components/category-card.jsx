import styled from 'styled-components';
import { BaseCard } from '../helpers/base-card';
import { Color } from '../tokens/colors';
import { TypographyVariant, Typography } from '../elements/typography';

const StyledCategoryCard = styled.article`
  padding: 8px;
  background-image: url(${({ image }) => image});
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
`;

const StyledName = styled(Typography).attrs({
  as: 'h3',
  variant: TypographyVariant.TITLE_3
})``;

const StyledWrapper = styled(BaseCard)`
  height: 140px;

  &:hover,
  &:focus {
    ${StyledName} {
      color: ${Color.BLUE_20};
    }
  }

  @media (min-width: 768px) {
    height: 100px;
  }
`;

function CategoryCard({ className, name, image }) {
  return (
    <StyledWrapper className={className} to='#'>
      <StyledCategoryCard image={image}>
        <StyledName>{name}</StyledName>
      </StyledCategoryCard>
    </StyledWrapper>
  );
}

export { CategoryCard };
