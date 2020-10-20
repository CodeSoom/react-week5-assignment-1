import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import categories from '../__fixtures__/categories';

import Categories from './Categories';

test('Categories', () => {
  const handleClickSelect = jest.fn();

  const { container, getByText } = render((
    <Categories
      categories={categories}
      onClick={handleClickSelect}
    />
  ));

  categories.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
    fireEvent.click(getByText(name));
  });

  expect(handleClickSelect).toBeCalledTimes(categories.length);
});
