import styled, { css } from 'styled-components';

const ContainerMixin = css`
  margin-right: auto;
  margin-left: auto;
  min-width: 320px;
  max-width: 380px;
  padding-right: 16px;
  padding-left: 16px;

  @media (min-width: 768px) {
    max-width: 768px;
    padding-right: 46px;
    padding-left: 46px;
  }
`;

const StyledContainer = styled.div`
  ${ContainerMixin}
`;

export { ContainerMixin, StyledContainer as Container };
