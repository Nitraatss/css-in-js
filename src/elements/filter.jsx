import styled from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';
import { Icon } from './icon';

const StyledWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

const StyledFilter = styled.select`
  appearance: none;
  width: 100%;
  padding-right: 26px;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => (theme.current === Theme.LIGHT ? Color.GRAY_50 : Color.GRAY_10)};
  cursor: pointer;

  &:hover {
    color: ${Color.BLUE_10};

    + svg {
      color: ${Color.BLUE_10};
    }
  }

  &:focus {
    color: ${Color.BLUE_30};

    + svg {
      color: ${Color.BLUE_30};
    }
  }
`;

const StyledChevron = styled(Icon).attrs({ name: IconName.CHEVRON_DOWN })`
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: none;
`;

function Filter({ className, label, children }) {
  return (
    <StyledWrapper className={className}>
      <StyledFilter aria-label={label}>{children}</StyledFilter>
      <StyledChevron />
    </StyledWrapper>
  );
}

export { Filter };
