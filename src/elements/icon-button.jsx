import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { BaseButton } from '../helpers/base-button';
import { Color } from '../tokens/colors';

const CSS = css`
  display: inline-flex;
  color: ${Color.BLUE_20};

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
    color: currentColor;
  }
`;

const StyledIconButton = styled(BaseButton)`
  ${CSS}
`;

const StyledIconLink = styled(Link)`
  ${CSS}
`;

export { StyledIconButton as IconButton, StyledIconLink as IconLink };
