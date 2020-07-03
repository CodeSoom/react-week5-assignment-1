import React from 'react';
import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  it('show list of restaurants', () => {
    const restaurants = [{
      id: 1,
      name: '양전주가',
    }];
    const { container } = render(<Restaurants restaurants={restaurants} />);
    expect(container).toHaveTextContent('양전주가');
  });
});
