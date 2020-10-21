import React from 'react';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  it('renders', () => {
    const { container } = render(<RestaurantsContainer />);

    expect(container).not.toBeNull();
  });
});
