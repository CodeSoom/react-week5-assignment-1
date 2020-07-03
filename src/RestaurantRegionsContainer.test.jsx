import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

import { regions } from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantRegionsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions,
    }));
  });

  it('show restaurant regions', () => {
    const { getByText } = render((
      <RestaurantRegionsContainer />
    ));

    regions.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
