import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import categories from '../__fixtures__/categories';

import Categories from './Categories';

describe('Categories', () => {
  const handleClickCategories = jest.fn();

  beforeAll(() => {
    jest.clearAllMocks();
  });

  const renderCategories = (selectedCategory = '') => render(
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      onClick={handleClickCategories}
    />,
  );

  context('without selectedCategory', () => {
    it('renders buttons', () => {
      const { container } = renderCategories();

      categories.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });
  });

  context('with selectedCategory', () => {
    it('renders button text with "(V)"', () => {
      const selectedCategory = 1;

      const { container } = renderCategories(selectedCategory);

      categories.forEach(({ id, name }) => {
        const buttonText = selectedCategory === id ? `${name} (V)` : name;

        expect(container).toHaveTextContent(buttonText);
      });
    });
  });

  context('when button is clicked', () => {
    it('called handleClickCategories', () => {
      const { getByText } = renderCategories();

      expect(handleClickCategories).not.toBeCalled();

      categories.forEach(({ name }) => {
        fireEvent.click(getByText(name));
      });

      expect(handleClickCategories).toBeCalledTimes(categories.length);
    });
  });
});
