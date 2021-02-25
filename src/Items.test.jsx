import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Items from './Items';

import region from '../fixtures/region';
import category from '../fixtures/category';

test('Items', () => {
  const handleClick = jest.fn();

  const { getByText, queryByText } = render((
    <Items
      region={region}
      category={category}
      onClick={handleClick}
    />
  ));

  expect(queryByText(/서울/)).not.toBeNull();
  expect(queryByText(/한식/)).not.toBeNull();

  fireEvent.click(getByText(/서울/));
  expect(handleClick).toBeCalled();

  fireEvent.click(getByText(/한식/));
  expect(handleClick).toBeCalled();
});
