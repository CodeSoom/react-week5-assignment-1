import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

test('Categories', () => {
  const handleClick = jest.fn();

  const { getByText } = render((
    <Categories
      categories={categories}
      onClick={handleClick}
    />
  ));

  fireEvent.click(getByText(/한식/));

  expect(handleClick).toBeCalledWith(1);

  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/중식/)).not.toBeNull();
});
