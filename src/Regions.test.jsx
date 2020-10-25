import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/regions';

test('Regions', () => {
  const handleClick = jest.fn();

  const { getByText } = render((
    <Regions regions={regions} onClick={handleClick} />
  ));

  expect(getByText('서울')).not.toBeNull();
  expect(getByText('대구')).not.toBeNull();
  expect(getByText('강원도')).not.toBeNull();

  expect(handleClick).toBeCalled();
});