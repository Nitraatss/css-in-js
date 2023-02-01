import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { BaseButton } from '../helpers/base-button';
import { Color } from '../tokens/colors';

const ButtonSize = {
  MEDIUM: 'medium',
  LARGE: 'large'
};

const ButtonSizeToCSS = {
  [ButtonSize.MEDIUM]: css`
    padding: 4px 8px;
    font-size: 14px;
    line-height: 20px;
  `,
  [ButtonSize.LARGE]: css`
    padding: 8px 16px;
    font-size: 16px;
    line-height: 22px;
  `
};

const CSS = css`
  ${({ size }) => ButtonSizeToCSS[size]}

  color: ${Color.WHITE};
  background-color: ${Color.BLUE_20};

  &:hover,
  &:focus {
    background-color: ${Color.BLUE_10};
  }

  &:active {
    background-color: ${Color.BLUE_30};
  }

  &:disabled {
    ${({ theme }) =>
      theme.current === Theme.LIGHT
        ? css`
            background-color: ${Color.GRAY_20};
          `
        : css`
            color: ${Color.GRAY_40};
            background-color: ${Color.GRAY_30};
          `}
  }
`;

const attrsFactory = ({ size }) => ({
  size: size || ButtonSize.MEDIUM
});

const StyledButton = styled(BaseButton).attrs(attrsFactory)`
  ${CSS}
`;

const StyledLink = styled(Link).attrs(attrsFactory)`
  ${CSS}
`;

export { ButtonSize, StyledButton as Button, StyledLink as Link };
