import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import categories from '../__fixtures__/categories';

import Categories from './Categories';

describe('Categories', () => {
  const handleClickCategories = jest.fn();

  beforeAll(() => {
    jest.clearAllMocks();
  });

  const renderCategories = () => render(
    <Categories
      categories={categories}
      onClick={handleClickCategories}
    />,
  );

  it('renders buttons', () => {
    const { container } = renderCategories();

    categories.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  context('when button is clicked', () => {
    it('called handleClickCategories', () => {
      const { getByText } = renderCategories();

      expect(handleClickCategories).not.toBeCalled();

      fireEvent.click(getByText('한식'));

      expect(handleClickCategories).toBeCalled();
    });
  });
});
