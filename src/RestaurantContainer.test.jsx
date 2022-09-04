import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { restaurants } from '../__fixtures__/data';

describe('<RestaurantsContainer />', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
    selectedRestaurant: '',
  }));

  it('renders restaurants', () => {
    const { container } = render((
      <RestaurantsContainer />
    ));

    restaurants.forEach((region) => {
      expect(container).toHaveTextContent(region.name);
    });
  });
});
