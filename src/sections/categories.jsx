import { Section } from '../helpers/section';
import { CardsList } from '../helpers/cards-list';
import { CategoryCard } from '../components/category-card';
import { useMockCategories } from '../mocks/categories';

function Categories({ className }) {
  const categories = useMockCategories();

  return (
    <Section className={className} title='Категории товаров'>
      <CardsList>
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </CardsList>
    </Section>
  );
}

export { Categories };
