import styled from 'styled-components';
import { Theme } from '../theme';
import { BaseCard } from '../helpers/base-card';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';
import { Icon } from '../elements/icon';
import { TypographyVariant, Typography } from '../elements/typography';

const StyledServiceCard = styled.article`
  position: relative;
  display: grid;
  align-content: end;
  padding: 4px;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledName = styled(Typography).attrs({
  as: 'h3',
  variant: TypographyVariant.TITLE_3
})`
  position: relative;
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  gap: 4px;
  padding: 4px;
  background-color: ${({ theme }) => (theme.current === Theme.LIGHT ? Color.WHITE : Color.GRAY_40)};
`;

const StyledArrow = styled(Icon).attrs({
  name: IconName.ARROW_RIGHT
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

function ServiceCard({ className, name, image, imageAlt }) {
  return (
    <StyledWrapper className={className} to='#'>
      <StyledServiceCard>
        <StyledImage src={image} alt={imageAlt} />
        <StyledName>
          {name}
          <StyledArrow />
        </StyledName>
      </StyledServiceCard>
    </StyledWrapper>
  );
}

export { ServiceCard };
