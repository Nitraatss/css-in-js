import styled, { useTheme } from 'styled-components';
import { Theme } from '../theme';
import { Container } from '../helpers/container';
import { Color } from '../tokens/colors';
import { Gradient } from '../tokens/gradients';
import { ButtonSize, Link } from '../elements/button';
import { TypographyVariant, Typography } from '../elements/typography';
import { useMockBanners } from '../mocks/banners';

const StyledBanner = styled(Container).attrs({
  as: 'article'
})`
  display: grid;
  justify-items: start;
  gap: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-image: ${({ theme }) => (theme.current === Theme.LIGHT ? Gradient.BANNER_LIGHT : Gradient.BANNER_DARK)};

  @media (min-width: 768px) {
    grid-template-columns: 280px;
    padding-top: 32px;
    padding-bottom: 32px;
    background-image: url(${({ image }) => image});
    background-size: cover;
  }
`;

const StyledTitle = styled(Typography).attrs({
  as: 'h2',
  variant: TypographyVariant.TITLE_1,
  color: Color.BLUE_20
})``;

const StyledText = styled(Typography).attrs(({ theme }) => ({
  variant: TypographyVariant.TEXT_1,
  color: theme.current === Theme.LIGHT ? Color.GRAY_30 : Color.GRAY_20
}))``;

const StyledLink = styled(Link).attrs({
  size: ButtonSize.LARGE
})``;

function Banner({ className }) {
  const { current } = useTheme();
  const { title, text, image } = useMockBanners(current);

  return (
    <StyledBanner className={className} image={image}>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{text}</StyledText>
      <StyledLink to='#'>Подробнее</StyledLink>
    </StyledBanner>
  );
}

export { Banner };
