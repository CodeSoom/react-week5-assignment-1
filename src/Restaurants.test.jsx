import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../fixture/restaurants';

describe('Restaurants', () => {
  it('renders Restaurants', () => {
    const { container } = render((
      <Restaurants
        restaurants={restaurants}
      />
    ));

    expect(container).toHaveTextContent('서울식당');
  });
});
