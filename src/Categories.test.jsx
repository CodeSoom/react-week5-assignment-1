import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Categories from './Categories';

import categories from './fixtures/categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  const renderCategories = (id = 0) => render(
    <Categories
      categories={categories}
      categoryId={id}
      onClick={handleClick}
    />,
  );
  it('show all categories', () => {
    const { getByText } = renderCategories();

    categories.forEach(({ name }) => {
      expect(getByText(`${name}`)).not.toBeNull();
    });
  });

  context('click category', () => {
    it('calls handleClick function', () => {
      const { getByText } = renderCategories();

      fireEvent.click(getByText('한식'));

      expect(handleClick).toBeCalled();
    });

    it('should be checked', () => {
      const { getByText } = renderCategories();

      fireEvent.click(getByText('한식'));

      const { container } = renderCategories(1);

      expect(container).toHaveTextContent('한식(V)');
    });
  });
});
