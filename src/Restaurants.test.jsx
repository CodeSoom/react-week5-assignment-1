import { render} from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../fixtures/restaurants';

describe('Restaurants', () => {
  it('renders restaurants list', () => {
    const { container } = render((
      <Restaurants
        restaurants={restaurants}
      />
    ));

    expect(container).toHaveTextContent(restaurants[0].name);
  });
});
