import styled, { useTheme } from 'styled-components';
import { Theme } from '../theme';
import { Container } from '../helpers/container';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';
import { Logo } from '../elements/logo';
import { Icon } from '../elements/icon';
import { IconButton } from '../elements/icon-button';
import { TextButton } from '../elements/text-button';
import { TypographyVariant, Typography } from '../elements/typography';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => (theme.current === Theme.LIGHT ? Color.GRAY_10 : Color.GRAY_60)};
`;

const StyledContentWrapper = styled(Container)`
  position: relative;
  display: grid;
  gap: 16px;
  padding-top: 16px;
  padding-bottom: 54px;

  @media (min-width: 768px) {
    grid-template-columns: min-content 1fr;
    gap: 32px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

const StyledLogoAndSocialLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: none;
  }
`;

const StyledSocialLinksList = styled.ul`
  display: flex;
  gap: 8px;
`;

const StyledSocialLinksItem = styled.li`
  display: grid;
`;

const StyledSocialLink = styled(IconButton).attrs({
  as: 'a'
})`
  color: ${({ theme }) => (theme.current === Theme.LIGHT ? Color.GRAY_30 : Color.GRAY_20)};
`;

const StyledContactLinksWrapper = styled.address`
  display: grid;
  justify-items: start;
  gap: 4px;
  font-style: normal;
`;

const StyledContactLink = styled(TextButton).attrs({
  as: 'a'
})`
  color: ${({ theme }) => (theme.current === Theme.LIGHT ? Color.GRAY_30 : Color.GRAY_20)};
`;

const StyledThemeButton = styled(IconButton)`
  position: absolute;
  bottom: 16px;
  left: 16px;
  color: ${({ theme }) => (theme.current === Theme.LIGHT ? Color.GRAY_30 : Color.GRAY_20)};

  @media (min-width: 768px) {
    top: 32px;
    right: 46px;
    bottom: auto;
    left: auto;
  }
`;

const StyledCopyrights = styled(Typography).attrs(({ theme }) => ({
  variant: TypographyVariant.TEXT_3,
  color: theme.current === Theme.LIGHT ? Color.WHITE : Color.GRAY_30
}))`
  padding-top: 2px;
  padding-bottom: 2px;
  text-align: center;
  background-color: ${({ theme }) => (theme.current === Theme.LIGHT ? Color.GRAY_20 : Color.GRAY_50)};
`;

const StyledTelegramIcon = styled(Icon).attrs({ name: IconName.TELEGRAM })``;
const StyledYouTubeIcon = styled(Icon).attrs({ name: IconName.YOUTUBE })``;
const StyledVKIcon = styled(Icon).attrs({ name: IconName.VK })``;
const StyledThemeToggleIcon = styled(Icon).attrs({ name: IconName.THEME_TOGGLE })``;

function Footer({ className }) {
  const { current, toggleTheme } = useTheme();
  const themeButtonLabel = current === Theme.LIGHT ? 'Тёмная тема' : 'Светлая тема';

  return (
    <StyledFooter className={className}>
      <StyledContentWrapper>
        <StyledLogoAndSocialLinksWrapper>
          <Logo />
          <StyledSocialLinksList>
            <StyledSocialLinksItem>
              <StyledSocialLink
                aria-label='Оптика «Зоркий» в Telegram'
                href='tg://resolve?domain=htmlacademy'
                target='_blank'
              >
                <StyledTelegramIcon />
              </StyledSocialLink>
            </StyledSocialLinksItem>
            <StyledSocialLinksItem>
              <StyledSocialLink
                aria-label='Оптика «Зоркий» на YouTube'
                href='https://www.youtube.com/user/htmlacademyru'
                target='_blank'
              >
                <StyledYouTubeIcon />
              </StyledSocialLink>
            </StyledSocialLinksItem>
            <StyledSocialLinksItem>
              <StyledSocialLink
                aria-label='Оптика «Зоркий» во ВКонтакте'
                href='https://vk.com/htmlacademy'
                target='_blank'
              >
                <StyledVKIcon />
              </StyledSocialLink>
            </StyledSocialLinksItem>
          </StyledSocialLinksList>
        </StyledLogoAndSocialLinksWrapper>
        <StyledContactLinksWrapper>
          <StyledContactLink href='mailto:hello@zorkiy.ru'>hello@zorkiy.ru</StyledContactLink>
          <StyledContactLink href='tel:+79999999999'>+7 999 999 99 99</StyledContactLink>
          <StyledContactLink href='https://yandex.ru/maps/-/CCUFJMdF8D' target='_blank'>
            Санкт-Петербург, наб. реки Карповки, 5П
          </StyledContactLink>
        </StyledContactLinksWrapper>
        <StyledThemeButton aria-label={themeButtonLabel} onClick={toggleTheme}>
          <StyledThemeToggleIcon />
        </StyledThemeButton>
      </StyledContentWrapper>
      <StyledCopyrights>© ООО «Интерактивные обучающие технологии», 2013−2022</StyledCopyrights>
    </StyledFooter>
  );
}

export { Footer };
