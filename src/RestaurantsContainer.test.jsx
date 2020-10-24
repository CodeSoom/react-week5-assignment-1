import React from 'react';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  it('shows a title', () => {
    const { getByText } = render(<RestaurantsContainer />);

    expect(getByText('List up')).not.toBeNull();
  });

  describe('list up restaurants', () => {
    context('with restaurants', () => {
      it('one or more restaurants', () => {
        // TODO: Check API fetch correct properties of a restaurant
      });
    });

    context('without restaurants', () => {
      it('empty restaurants', () => {
        // TODO: Check API fetch empty restaurants
      });
    });
  });
});
