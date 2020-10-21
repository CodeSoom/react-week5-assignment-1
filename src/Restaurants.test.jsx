import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  it('show all information', () => {
    const { container } = render(<Restaurants />);

    expect(container).toHaveTextContent('새마을 식당');
  });
});
