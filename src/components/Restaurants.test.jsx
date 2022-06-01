import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../../fixtures/restaurants';

describe('Restaurants', () => {
  it('"restaurant" 이름을 렌더한다', () => {
    const { getByText } = render(<Restaurants restaurants={restaurants} />);

    restaurants.forEach((restaurant) => {
      expect(getByText(restaurant.name)).toBeInTheDocument();
    });
  });
});
