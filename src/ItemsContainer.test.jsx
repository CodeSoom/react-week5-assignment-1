import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import ItemsContainer from './ItemsContainer';

import region from '../fixtures/region';
import category from '../fixtures/category';

jest.mock('react-redux');

test('ItemsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    region,
    category,
  }));

  const { queryByText } = render((
    <ItemsContainer />
  ));

  expect(queryByText(/서울/)).not.toBeNull();
  expect(queryByText(/한식/)).not.toBeNull();
});
