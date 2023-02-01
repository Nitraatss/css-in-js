import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { BaseButton } from '../helpers/base-button';
import { Color } from '../tokens/colors';

const TextButtonSize = {
  MEDIUM: 'medium',
  LARGE: 'large'
};

const TextButtonSizeToCSS = {
  [TextButtonSize.MEDIUM]: css`
    font-size: 14px;
    line-height: 20px;
  `,
  [TextButtonSize.LARGE]: css`
    font-size: 16px;
    line-height: 22px;
  `
};

const CSS = css`
  ${({ size }) => TextButtonSizeToCSS[size]}

  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => (theme.current === Theme.LIGHT ? Color.GRAY_50 : Color.GRAY_10)};

  &:hover,
  &:focus {
    color: ${Color.BLUE_10};
  }

  &:active {
    color: ${Color.BLUE_30};
  }

  &:disabled {
    color: ${({ theme }) => (theme.current === Theme.LIGHT ? Color.GRAY_20 : Color.GRAY_30)};
  }

  svg {
    color: ${Color.BLUE_20};
  }

  &:hover,
  &:focus,
  &:active,
  &:disabled {
    svg {
      color: currentColor;
    }
  }
`;

const attrsFactory = ({ size }) => ({
  size: size || TextButtonSize.MEDIUM
});

const StyledTextButton = styled(BaseButton).attrs(attrsFactory)`
  ${CSS}
`;

const StyledTextLink = styled(Link).attrs(attrsFactory)`
  ${CSS}
`;

export { TextButtonSize, StyledTextButton as TextButton, StyledTextLink as TextLink };
