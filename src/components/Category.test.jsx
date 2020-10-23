import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Category from './Category';

test('Regions', () => {
  const clickHandler = jest.fn();

  const { queryByText } = render((
    <Category
      name="한식"
      onClick={clickHandler}
    />
  ));

  expect(queryByText(/한식/)).not.toBeNull();

  expect(clickHandler).not.toBeCalled();

  fireEvent.click(queryByText(/한식/));

  expect(clickHandler).toBeCalled();
});
