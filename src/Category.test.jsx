import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Category from './Category';

test('Category', () => {
  const name = '한식';
  const clickHandler = jest.fn();

  const { getByText } = render((
    <Category
      name={name}
      onClick={clickHandler}
    />
  ));

  expect(getByText(name)).not.toBeNull();

  fireEvent.click(getByText(name));
  expect(clickHandler).toBeCalled();
});
