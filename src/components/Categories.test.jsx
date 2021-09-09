import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import categories from '../../fixtures/categories';

import Categories from './Categories';

describe('Categories', () => {
  const handleClickCategory = jest.fn();

  function renderCategories(clickedCategory) {
    return render((
      <Categories
        categories={categories}
        clickedCategory={clickedCategory}
        onClick={handleClickCategory}
      />
    ));
  }

  it('shows categories name buttons', () => {
    const clickedCategory = 2;

    const { container } = renderCategories(clickedCategory);

    categories.forEach(({ id, name }) => {
      const button = clickedCategory === id
        ? `${name}(v)`
        : name;
      expect(container).toHaveTextContent(button);
    });
  });

  context('when category buttons clicked', () => {
    it('renders handleClickCategory function', () => {
      const clickedCategory = '';

      const { container, getByText } = renderCategories(clickedCategory);

      categories.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);

        fireEvent.click(getByText(name));
      });

      expect(handleClickCategory).toBeCalledWith(3);
    });
  });
});
