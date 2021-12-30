import { render } from '@testing-library/react';

import Categories from './Categories';

import { categories } from '../__fixtures__/categories';

jest.mock('react-redux');

describe('Categories', () => {
  context('with categories', () => {
    it('render "category" buttons', () => {
      const { getByRole } = render(
        <Categories categories={categories} />,
      );

      categories.forEach((category) => {
        expect(getByRole('button', { name: category.name })).toBeInTheDocument();
      });
    });

    it('selected button, render category name with (V) ', () => {
      const { getByText } = render(
        <Categories categories={categories} selectedCategory={categories[0]} />,
      );

      expect(getByText(`${categories[0].name}(V)`)).toBeInTheDocument();
    });
  });

  context('without categories', () => {
    it('renders nothing', () => {
      const { container } = render(
        <Categories categories={[]} />,
      );

      expect(container).toBeEmptyDOMElement();
    });
  });
});
