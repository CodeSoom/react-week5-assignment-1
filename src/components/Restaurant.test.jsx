import { render } from '@testing-library/react';

import restaurants from '../fixtures/restaurants';

import Restaurant from './Restaurant';

describe('Restaurant', () => {
  function renderRestaurant() {
    return render((
      <Restaurant
        restaurant={restaurants[0]}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders restaurant', () => {
    const { container } = renderRestaurant();

    expect(container).toHaveTextContent(/두향/);
  });
});
