import { useId, useState } from 'react';
import styled from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';
import { Icon } from './icon';
import { IconButton } from './icon-button';
import { TypographyVariant, Typography } from './typography';

const StyledWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const StyledCheckbox = styled(IconButton)`
  box-shadow: inset 0 0 0 1px ${({ theme }) => (theme.current === Theme.LIGHT ? Color.GRAY_20 : Color.GRAY_10)};

  &:hover,
  &:focus,
  &:active {
    box-shadow: inset 0 0 0 1px currentColor;
  }

  svg {
    opacity: 0;
  }

  &[aria-checked='true'] {
    svg {
      opacity: 1;
    }
  }
`;

const StyledLabel = styled(Typography).attrs({
  as: 'label',
  variant: TypographyVariant.TEXT_1
})`
  padding-left: 8px;
  cursor: pointer;
`;

function Checkbox({ className, label }) {
  const id = useId();
  const [checked, setChecked] = useState(false);
  const onCheckboxClick = () => setChecked(!checked);

  return (
    <StyledWrapper className={className}>
      <StyledCheckbox id={id} role='checkbox' aria-checked={checked} onClick={onCheckboxClick}>
        <Icon name={IconName.CHECK} />
      </StyledCheckbox>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </StyledWrapper>
  );
}

export { Checkbox };
