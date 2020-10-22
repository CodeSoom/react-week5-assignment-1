import React from 'react';

import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import { restaurantFixture } from '../fixtures/fixtures';
import RestaurantContainer from './RestaurantContainer';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: restaurantFixture,
  }));

  const restaurantContainerRender = () => render((
    <RestaurantContainer />
  ));

  it('renders restaurantName', () => {
    const { container } = restaurantContainerRender();

    restaurantFixture.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
