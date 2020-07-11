import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import { categories } from '../fixtures/categories';

describe('Categories', () => {
  it('renders list of categories and listens click event', () => {
    const handleClick = jest.fn();

    const { getByText } = render((
      <Categories
        categories={categories}
        selectedCategory={2}
        onClick={handleClick}
      />
    ));

    expect(getByText(/한식/)).not.toBeNull();

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByText(/한식/));

    expect(handleClick).toBeCalledWith(1);
  });
});
