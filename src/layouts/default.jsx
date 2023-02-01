import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../sections/header';
import { Footer } from '../sections/footer';

const StyledDefaultLayout = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100vh;
`;

const StyledHeader = styled(Header)`
  position: relative;
`;

function DefaultLayout() {
  return (
    <StyledDefaultLayout>
      <StyledHeader />
      <Outlet />
      <Footer />
    </StyledDefaultLayout>
  );
}

export { DefaultLayout };
