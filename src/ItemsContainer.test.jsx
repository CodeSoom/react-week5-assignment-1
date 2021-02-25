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

  const { queryByText } = render((
    <ItemsContainer />
  ));

  expect(queryByText(/서울/)).not.toBeNull();
  expect(queryByText(/한식/)).not.toBeNull();
});
