import { render } from '@testing-library/react';

import given from 'given2';

import Categories from './Categories';

import { categories } from '../__fixtures__/data';

describe('<Categories />', () => {
  given('categories', () => categories);
  given('selectedCategory', () => undefined);

  const renderCategory = () => render(
    <Categories
      categories={given.categories}
      selectedCategory={given.selectedCategory}
    />,
  );

  context('without selectedCategory', () => {
    given('selectedCategory', () => undefined);

    it('renders categories', () => {
      const { container } = renderCategory();

      categories.forEach((category) => {
        expect(container).toHaveTextContent(category.name);
      });
    });
  });

  context('with selectedCategory', () => {
    given('selectedCategory', () => categories[0].name);

    it('renders category with (V) mark', () => {
      const { container } = renderCategory();

      expect(container).toHaveTextContent('한식(V)');
    });
  });
});
