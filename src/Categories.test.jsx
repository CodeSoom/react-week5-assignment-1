import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import { categories } from '../fixture/test-data';

test('Categories', () => {
  const categoryId = 0;

  const handleClick = jest.fn();

  const { getByText } = render((
    <Categories
      categories={categories}
      categoryId={categoryId}
      onClick={handleClick}
    />
  ));

  categories.forEach((cateogory) => {
    expect(getByText(cateogory.name)).not.toBeNull();
  });

  fireEvent.click(getByText(categories[0].name));

  expect(handleClick).toBeCalled();

  expect(getByText(`${categories[0].name}(V)`));
});
