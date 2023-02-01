import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { Theme } from '../theme';
import logoLight from '../images/logo-light.svg';
import logoDark from '../images/logo-dark.svg';

const StyledLogo = styled(Link)`
  display: inline-grid;
  width: 86px;
  height: 30px;
`;

function Logo({ className }) {
  const { current } = useTheme();
  const image = current === Theme.LIGHT ? logoLight : logoDark;

  return (
    <StyledLogo className={className} to='/'>
      <img src={image} alt='Логотип оптики «Зоркий»' />
    </StyledLogo>
  );
}

export { Logo };
