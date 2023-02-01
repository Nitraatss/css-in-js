import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Container } from '../helpers/container';
import { Color } from '../tokens/colors';
import { Shadow } from '../tokens/shadows';
import { IconName } from '../tokens/icons';
import { Logo } from '../elements/logo';
import { Icon } from '../elements/icon';
import { IconButton } from '../elements/icon-button';
import { TextButtonSize, TextLink } from '../elements/text-button';

const StyledHeader = styled.header`
  ${({ theme }) =>
    theme.current === Theme.LIGHT
      ? css`
          background-color: ${Color.WHITE};
          box-shadow: ${Shadow.HEADER_LIGHT};
        `
      : css`
          background-color: ${Color.GRAY_60};
        `}
`;

const StyledNavigation = styled(Container).attrs({
  as: 'nav'
})`
  display: grid;
  grid-template-columns: min-content min-content;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding-top: 8px;
  padding-bottom: 8px;

  @media (min-width: 768px) {
    grid-template-columns: min-content 1fr min-content;
    gap: 32px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

const StyledMenuButton = styled(IconButton)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledTextLinksList = styled.ul`
  display: none;

  @media (min-width: 768px) {
    justify-self: center;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
`;

const StyledTextLinksItem = styled.li`
  display: grid;
`;

const StyledTextLink = styled(TextLink).attrs({
  size: TextButtonSize.LARGE
})``;

const StyledProfileLink = styled(StyledTextLink)`
  display: none;

  @media (min-width: 768px) {
    display: inline-flex;
  }
`;

const StyledMenuIcon = styled(Icon).attrs({ name: IconName.MENU })``;
const StyledUserIcon = styled(Icon).attrs({ name: IconName.USER })``;

function Header({ className }) {
  return (
    <StyledHeader className={className}>
      <StyledNavigation>
        <Logo />
        <StyledMenuButton aria-label='Меню'>
          <StyledMenuIcon />
        </StyledMenuButton>
        <StyledTextLinksList>
          <StyledTextLinksItem>
            <StyledTextLink to='/catalog'>Товары</StyledTextLink>
          </StyledTextLinksItem>
          <StyledTextLinksItem>
            <StyledTextLink to='#'>Услуги</StyledTextLink>
          </StyledTextLinksItem>
          <StyledTextLinksItem>
            <StyledTextLink to='#'>Новости</StyledTextLink>
          </StyledTextLinksItem>
        </StyledTextLinksList>
        <StyledProfileLink to='#'>
          <StyledUserIcon />
          Профиль
        </StyledProfileLink>
      </StyledNavigation>
    </StyledHeader>
  );
}

export { Header };
