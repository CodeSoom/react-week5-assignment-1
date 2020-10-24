import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  function renderMaker(categories = {}, categoryId = '', handleClick = '') {
    return render((
      <Categories
        categories={categories}
        selectCategory={categoryId}
        onClick={handleClick}
      />
    ));
  }
  it('when rendering then show the list', () => {
    const { getByText } = renderMaker(categories);
    expect(getByText(/한식/)).not.toBeNull();
    expect(getByText(/중식/)).not.toBeNull();
  });

  it('Category button click', () => {
    const categoryId = 1;

    const { getByText } = renderMaker(categories, categoryId, handleClick);

    fireEvent.click(getByText(/한식/));

    expect(handleClick).toBeCalledWith(1);

    expect(getByText('한식(V)')).not.toBeNull();
  });
});
