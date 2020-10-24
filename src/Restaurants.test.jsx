import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../fixtures/restaurants';

describe('Restaurants', () => {
  it('renders', () => {
    const { container } = render(<Restaurants restaurants={restaurants} />);

    expect(container).not.toBeNull();
  });
});
