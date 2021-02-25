import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import ItemsContainer from './ItemsContainer';

import region from '../fixtures/region';

jest.mock('react-redux');

test('ItemsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    items: region,
  }));

  const { getByText } = render((
    <ItemsContainer />
  ));

  expect(getByText(/서울/)).not.toBeNull();
});
