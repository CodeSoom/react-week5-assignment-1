import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import categories from '../../fixtures/categories';

import Categories from './Categories';

describe('Categories', () => {
  const handleClickCategory = jest.fn();

  function renderCategories(selectedCategory) {
    return render((
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onClick={handleClickCategory}
      />
    ));
  }

  it('shows category page', () => {
    const selectedCategory = 2;

    const { container } = renderCategories(selectedCategory);

    categories.forEach(({ id, name }) => {
      const buttonText = selectedCategory === id
        ? `${name}(V)`
        : name;
      expect(container).toHaveTextContent(buttonText);
    });
  });

  context('when category button clicked', () => {
    it('changes category', () => {
      const selectedCategory = '';

      const { container, getByText } = renderCategories(selectedCategory);

      categories.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);

        fireEvent.click(getByText(name));
      });

      expect(handleClickCategory).toBeCalledTimes(categories.length);
    });
  });
});
