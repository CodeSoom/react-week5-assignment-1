import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import intialCategories from '../__fixtures__/categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  function renderCategories(selectedCategoryId, categories) {
    return render((
      <Categories
        selectedCategoryId={selectedCategoryId}
        categories={categories}
        onClick={handleClick}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with categories', () => {
    it('show categories of food', () => {
      const { getByText } = renderCategories(0, intialCategories);

      intialCategories.forEach(({ name }) => {
        expect(getByText(name)).not.toBeNull();
      });
    });

    it('click category button', () => {
      const { getByText } = renderCategories(0, intialCategories);

      intialCategories.forEach(({ name }) => {
        const button = getByText(name);

        expect(button).not.toBeNull();

        fireEvent.click(button);
      });

      expect(handleClick).toBeCalledTimes(intialCategories.length);
    });

    it('shows a selected button', () => {
      const selectedCategoryId = 1;
      const { getByText } = renderCategories(selectedCategoryId, intialCategories);

      intialCategories.forEach(({ id, name }) => {
        const buttonText = name + (id === selectedCategoryId ? '(V)' : '');

        expect(getByText(buttonText)).not.toBeNull();
      });
    });
  });

  context('without categories', () => {
    it('show nothing message', () => {
      const { getByText } = renderCategories(0, []);

      expect(getByText(/음식 분류가 없습니다/)).not.toBeNull();
    });
  });
});
