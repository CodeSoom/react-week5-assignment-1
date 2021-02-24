import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import { useSelector } from 'react-redux';

import restaurants from '../fixtures/restaurants'

test('Restaurants', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));
  const { getByText } = render((
    <Restaurants restaurants={restaurants} />
  ));
  
  expect(getByText(/김밥제국/)).not.toBeNull();
});
