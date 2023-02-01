import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { ContainerMixin } from '../helpers/container';
import { VisuallyHiddenMixin } from '../helpers/visually-hidden';
import { Color } from '../tokens/colors';
import { Checkbox } from '../elements/checkbox';
import { Filter } from '../elements/filter';

const StyledFilters = styled.section`
  ${ContainerMixin}

  display: grid;
  gap: 16px;
`;

const StyledTitle = styled.h2`
  ${VisuallyHiddenMixin}
`;

const StyledFiltersList = styled.ul`
  display: grid;
  gap: 4px;

  @media (min-width: 768px) {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 8px;
  }
`;

const StyledFiltersItem = styled.li`
  display: grid;

  ${({ theme }) => {
    const borderColor = theme.current === Theme.LIGHT ? Color.GRAY_20 : Color.GRAY_30;

    return css`
      &:not(:last-child) {
        border-bottom: 1px solid ${borderColor};
        padding-bottom: 4px;

        @media (min-width: 768px) {
          border-right: 1px solid ${borderColor};
          border-bottom: none;
          padding-right: 8px;
          padding-bottom: 0;
        }
      }
    `;
  }}
`;

function Filters({ className }) {
  return (
    <StyledFilters className={className}>
      <StyledTitle>Фильтры</StyledTitle>
      <StyledFiltersList>
        <StyledFiltersItem>
          <Filter label='Бренд'>
            <option>Бренд</option>
            <option>Seiko</option>
            <option>Max Mara</option>
            <option>Fossil</option>
            <option>Ray-Ban</option>
            <option>Rolph</option>
            <option>Gucci</option>
          </Filter>
        </StyledFiltersItem>
        <StyledFiltersItem>
          <Filter label='Вид оправы'>
            <option>Вид оправы</option>
            <option>Ободковые</option>
            <option>Полуободковые</option>
            <option>Безободковые</option>
          </Filter>
        </StyledFiltersItem>
        <StyledFiltersItem>
          <Filter label='Форма оправы'>
            <option>Форма оправы</option>
            <option>Круглые</option>
            <option>Квадратные</option>
            <option>«Авиаторы»</option>
            <option>«Кошачий глаз»</option>
          </Filter>
        </StyledFiltersItem>
        <StyledFiltersItem>
          <Filter label='Материал оправы'>
            <option>Материал оправы</option>
            <option>Металлические</option>
            <option>Пластиковые</option>
            <option>Комбинированные</option>
          </Filter>
        </StyledFiltersItem>
      </StyledFiltersList>
      <Checkbox label='В наличии' />
    </StyledFilters>
  );
}

export { Filters };
