import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import regions from '../__fixtures__/regions';

test('Regions', () => {
  const handleClick = jest.fn();
  
  const { getByText } = render((
    <Regions regions={regions} />
  ));

  regions.forEach(({ name }) => {
    expect(getByText(name)).not.toBeNull();
  });

  fireEvent.click(getByText(regions[0].name));

  expect(handleClick).toBeCalled();
});
