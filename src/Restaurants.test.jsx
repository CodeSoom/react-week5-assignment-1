import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from './fixtures/restaurants';

jest.mock('react-redux');

describe('Restaurants', () => {
  it('renders restaurant', () => {
    const { container } = render((
      <Restaurants restaurants={restaurants} />
    ));

    expect(container).toHaveTextContent('양천주가');
  });
});
