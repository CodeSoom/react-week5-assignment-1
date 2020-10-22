import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../__fixtures__/categories';

test('Categories', () => {
  const handleClick = jest.fn();

  const { getByText } = render((
    <Categories categories={categories} onClick={handleClick} />
  ));

  categories.forEach(({ name }) => {
    expect(getByText(name)).not.toBeNull();
  });

  fireEvent.click(getByText(categories[0].name));

  expect(handleClick).toBeCalled();
});
