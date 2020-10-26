import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../../../fixtures/categories';

describe('Regions', () => {
  const handleClickSelectCategory = jest.fn();

  const renderCategory = () => render((
    <Categories
      categories={categories}
      onClickSelectCategory={handleClickSelectCategory}
    />
  ));

  it('renders every category name', () => {
    const { queryByText } = renderCategory();

    categories.forEach(({ name: categoryName }) => {
      expect(queryByText(categoryName)).not.toBeNull();
    });
  });

  it('calls click handler when user clicks each category name', () => {
    const { queryByText } = renderCategory();

    categories.forEach(({ name: categoryName }) => {
      handleClickSelectCategory.mockClear();

      expect(handleClickSelectCategory).not.toBeCalled();

      fireEvent.click(queryByText(categoryName));

      expect(handleClickSelectCategory).toBeCalled();
    });
  });
});
