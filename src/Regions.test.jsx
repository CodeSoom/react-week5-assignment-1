import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import regions from '../fixtures/regions';

import Regions from './Regions';

jest.mock('react-redux');

test('Regions', () => {
  useSelector.mockImplementation((selector) => selector({
    selectedRegion: 1,
  }));

  const { getByText } = render((
    <Regions regions={regions} />
  ));

  expect(getByText('부산')).not.toBeNull();
});
