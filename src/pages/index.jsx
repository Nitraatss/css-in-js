import styled from 'styled-components';
import { VisuallyHiddenMixin } from '../helpers/visually-hidden';
import { Banner } from '../sections/banner';
import { Categories } from '../sections/categories';
import { Services } from '../sections/services';

const StyledIndexPage = styled.main`
  padding-bottom: 60px;
`;

const StyledTitle = styled.h1`
  ${VisuallyHiddenMixin}
`;

const StyledBanner = styled(Banner)`
  margin-bottom: 40px;
`;

const StyledCategories = styled(Categories)`
  margin-bottom: 40px;
`;

function IndexPage() {
  return (
    <StyledIndexPage>
      <StyledTitle>Оптика «Зоркий»</StyledTitle>
      <StyledBanner />
      <StyledCategories />
      <Services />
    </StyledIndexPage>
  );
}

export { IndexPage };
