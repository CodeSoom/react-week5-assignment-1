import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Region from './Region';

test('Regions', () => {
  const clickHandler = jest.fn();

  const { queryByText } = render((
    <Region
      name="서울"
      onClick={clickHandler}
    />
  ));

  expect(queryByText(/서울/)).not.toBeNull();

  expect(clickHandler).not.toBeCalled();

  fireEvent.click(queryByText(/서울/));

  expect(clickHandler).toBeCalled();
});
