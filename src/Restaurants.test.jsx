import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import { restaurants } from '../fixtures/fixture';

jest.mock('react-redux');

describe('Restaurants', () => {
  it('sets restaurants', () => {
    const renderRestaurants = () => render((
      <Restaurants
        restaurants={restaurants}
      />
    ));

    const { container } = renderRestaurants();

    expect(container).toHaveTextContent('모토쿠라시');
    expect(container).toHaveTextContent('일식');
    expect(container).toHaveTextContent('서울시 송파구');
  });
});
