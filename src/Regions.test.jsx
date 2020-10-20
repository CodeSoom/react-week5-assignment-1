import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import regions from '../__fixtures__/regions';

import Regions from './Regions';

jest.mock('react-redux');

test('Regions', () => {
  const handleClickSelectRegion = jest.fn();

  const { container, getByText } = render((
    <Regions
      regions={regions}
      onClick={handleClickSelectRegion}
    />
  ));

  regions.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
    fireEvent.click(getByText(name));
  });

  expect(handleClickSelectRegion).toBeCalledTimes(regions.length);
});
