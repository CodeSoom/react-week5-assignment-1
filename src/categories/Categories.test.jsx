import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../../fixtures/categories';

describe('Categories', () => {
  it('renders each, calls click handler on each', () => {
    const handleClickSelectCategory = jest.fn();

    const { queryByText } = render((
      <Categories
        categories={categories}
        onClickSelectCategory={handleClickSelectCategory} 
      />
    ));

    categories.forEach(({ name }) => {
      jest.clearAllMocks();

      expect(queryByText(new RegExp(name))).not.toBeNull();

      expect(handleClickSelectCategory).not.toBeCalled();

      fireEvent.click(queryByText(new RegExp(name)));

      expect(handleClickSelectCategory).toBeCalled();
    });
  });
});
