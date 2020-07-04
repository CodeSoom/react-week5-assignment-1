import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

jest.mock('react-redux');

describe('App', () => {
  it('should display restaurants', () => {
    const restaurants = [
      { id: 101, name: '원초밥' },
    ];

    const { container } = render((
      <Restaurants
        restaurants={restaurants}
      />
    ));

    expect(container).toHaveTextContent('원초밥');
  });
});
