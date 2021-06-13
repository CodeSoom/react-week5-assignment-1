import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import { restaurants } from '../../../fixtures/restaurants';

describe('Restaurants', () => {
  it('renders restaurants', () => {
    const { getByText } = render(<Restaurants restaurants={restaurants} />);

    restaurants.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
