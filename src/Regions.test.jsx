import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/regions';

test('Categories', () => {
  const handleClick = jest.fn();
  const { getByText } = render((
    <Regions
      onClick={handleClick}
      regions={regions}
    />
  ));

  fireEvent.click(getByText(/서울/));

  expect(handleClick).toBeCalled();

  expect(getByText(/서울/)).not.toBeNull();
  expect(getByText(/대전/)).not.toBeNull();
});
