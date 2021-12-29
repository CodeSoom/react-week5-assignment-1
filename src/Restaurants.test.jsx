import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

jest.mock('react-redux');

describe('Restaurants', () => {
  const renderRestaurants = () => render((<Restaurants />));

  it('sets restaurants', () => {
    const { container } = renderRestaurants();

    expect(container).toHaveTextContent('레스토랑');
  });
});
