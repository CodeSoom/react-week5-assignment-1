import { render } from '@testing-library/react';

import Categories from './Categories';

import { categories } from '../__fixtures__/data';

const renderCategory = (c, s) => render(
  <Categories
    categories={c}
    selectedCategory={s}
  />,
);

describe('<Categories />', () => {
  context('without selectedCategory', () => {
    it('renders categories', () => {
      const { container } = renderCategory(categories);

      categories.forEach((category) => {
        expect(container).toHaveTextContent(category.name);
      });
    });
  });

  context('with selectedCategory', () => {
    it('renders category with (V) mark', () => {
      const { container } = renderCategory(categories, categories[0].name);

      expect(container).toHaveTextContent('한식(V)');
    });
  });
});
