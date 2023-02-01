import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { BaseCard } from '../helpers/base-card';
import { Color } from '../tokens/colors';
import { Shadow } from '../tokens/shadows';
import { Button } from '../elements/button';
import { TypographyVariant, Typography } from '../elements/typography';

const StyledProductCard = styled.article`
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: end;
  gap: 8px;
  padding: 8px;
`;

const StyledNameAndPrice = styled.div`
  display: grid;
  gap: 4px;
`;

const StyledName = styled(Typography).attrs({
  as: 'h3',
  variant: TypographyVariant.TITLE_3
})``;

const StyledPrice = styled(Typography).attrs({
  variant: TypographyVariant.TEXT_1,
  color: Color.GRAY_30
})``;

const StyledLabels = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
`;

const StyledLabel = styled(Typography).attrs({
  variant: TypographyVariant.TEXT_2,
  color: Color.BLUE_20
})`
  border: 1px solid currentColor;
  padding: 0 4px;
`;

const UNAVAILABLE_CSS = css`
  cursor: not-allowed;

  ${StyledImage} {
    opacity: 0.4;
  }

  ${StyledName},
  ${StyledPrice},
  ${StyledLabel} {
    color: ${({ theme }) => (theme.current === Theme.LIGHT ? Color.GRAY_20 : Color.GRAY_30)};
  }

  &:hover,
  &:focus {
    ${({ theme }) =>
      theme.current === Theme.LIGHT
        ? css`
            box-shadow: ${Shadow.CARD_DEFAULT_LIGHT};

            ${StyledName} {
              color: ${Color.GRAY_20};
            }
          `
        : css`
            box-shadow: none;

            ${StyledName} {
              color: ${Color.GRAY_30};
            }
          `}
  }
`;

const StyledWrapper = styled(BaseCard)`
  &:hover,
  &:focus {
    ${StyledName} {
      color: ${Color.BLUE_20};
    }
  }

  ${({ unavailable }) => unavailable && UNAVAILABLE_CSS}
`;

function ProductCard({ className, name, price, image, imageAlt, hit, novelty, unavailable }) {
  return (
    <StyledWrapper className={className} to='#' unavailable={unavailable}>
      <StyledProductCard>
        <StyledImage src={image} alt={imageAlt} />
        <StyledContent>
          <StyledNameAndPrice>
            <StyledName>{name}</StyledName>
            <StyledPrice>{price}</StyledPrice>
          </StyledNameAndPrice>
          <Button disabled={unavailable}>Купить</Button>
        </StyledContent>
        <StyledLabels>
          {hit && <StyledLabel>Хит</StyledLabel>}
          {novelty && <StyledLabel>Новинка</StyledLabel>}
        </StyledLabels>
      </StyledProductCard>
    </StyledWrapper>
  );
}

export { ProductCard };
