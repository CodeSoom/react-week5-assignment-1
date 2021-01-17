import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../__fixtures__/categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  function renderCategories(selectedCategoryId) {
    return render((
      <Categories
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onClick={handleClick}
      />
    ));
  }

  context('when category is selected', () => {
    const selectedCategoryId = 1;

    it("renders 'V' mark on the clicked button", () => {
      const { getByText } = renderCategories(selectedCategoryId);

      expect(getByText('한식(V)')).not.toBeNull();
    });
  });

  context('when category is not selected', () => {
    const selectedCategoryId = 0;

    it('renders buttons', () => {
      const { getByText } = renderCategories(selectedCategoryId);

      categories.forEach(({ name }) => {
        expect(getByText(name)).not.toBeNull();
      });
    });
  });

  context('click category button', () => {
    it('occurs onclick event', () => {
      const { getByText } = renderCategories();

      fireEvent.click(getByText(categories[0].name));

      expect(handleClick).toBeCalled();
    });
  });
});
