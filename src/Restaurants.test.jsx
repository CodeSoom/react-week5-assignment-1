import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import { restaurants } from '../__fixtures__/restaurants';

jest.mock('react-redux');

describe('Restaurants', () => {
  context('with restaurants', () => {
    it('render restaurant name', () => {
      const { getByText } = render(
        <Restaurants restaurants={restaurants} />,
      );

      restaurants.forEach((restaurant) => {
        expect(getByText(restaurant.name)).toBeInTheDocument();
      });
    });
  });

  context('without regions', () => {
    it('noting render', () => {
      const { container } = render(
        <Restaurants restaurants={[]} />,
      );

      expect(container).toBeEmptyDOMElement();
    });
  });
});
