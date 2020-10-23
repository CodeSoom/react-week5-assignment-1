import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

describe('Categories', () => {
  it('when rendering then show the list', () => {
    const { getByText } = render((
      <Categories
        categories={categories}
      />
    ));
    expect(getByText(/한식/)).not.toBeNull();
    expect(getByText(/중식/)).not.toBeNull();
  });
  it('Category button click', () => {
    const handleClick = jest.fn();

    const categoryId = 1;
    const { getByText } = render((
      <Categories
        categories={categories}
        selectCategory={categoryId}
        onClick={handleClick}
      />
    ));

    fireEvent.click(getByText(/한식/));

    expect(handleClick).toBeCalledWith(1);

    expect(getByText('한식(V)')).not.toBeNull();
  });
});
