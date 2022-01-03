import { render } from '@testing-library/react';
import given from 'given2';

import Categories from './Categories';

import { categories } from '../__fixtures__/categories';

jest.mock('react-redux');

describe('Categories', () => {
  const renderComponent = (selectedCategory) => render(
    <Categories
      categories={given.categories}
      selectedCategory={selectedCategory}
    />,
  );

  context('with categories', () => {
    given('categories', () => categories);

    it('render "category" buttons', () => {
      const { getByRole } = renderComponent(undefined);

      categories.forEach((category) => {
        expect(getByRole('button', { name: category.name })).toBeInTheDocument();
      });
    });

    it('selected button, render category name with (V) ', () => {
      const { getByText } = renderComponent(categories[0]);

      expect(getByText(`${categories[0].name}(V)`)).toBeInTheDocument();
    });
  });

  context('without categories', () => {
    it('renders nothing', () => {
      given('categories', () => []);
      const { container } = renderComponent(undefined);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
