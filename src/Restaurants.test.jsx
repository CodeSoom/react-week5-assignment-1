import { render } from '@testing-library/react';
import given from 'given2';

import Restaurants from './Restaurants';

import { restaurants } from '../__fixtures__/restaurants';

jest.mock('react-redux');

describe('Restaurants', () => {
  const renderComponent = () => render(
    <Restaurants restaurants={given.restaurants} />,
  );

  context('with restaurants', () => {
    given('restaurants', () => restaurants);

    it('render restaurant name', () => {
      const { getByText } = renderComponent();

      restaurants.forEach((restaurant) => {
        expect(getByText(restaurant.name)).toBeInTheDocument();
      });
    });
  });

  context('without regions', () => {
    given('restaurants', () => []);

    it('noting render', () => {
      const { container } = renderComponent();

      expect(container).toBeEmptyDOMElement();
    });
  });
});
