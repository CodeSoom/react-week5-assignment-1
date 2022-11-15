import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

import { restaurants } from '../fixtures/data';

jest.mock('react-redux');

describe('Restaurant', () => {
  const renderRestaurant = ({ restaurant }) => render((
    <Restaurant
      restaurant={restaurant}
    />
  ));

  it('레스토랑 목록이 랜더링된다', () => {
    const restaurant = restaurants[0];

    const { container } = renderRestaurant({ restaurant });

    expect(container).toHaveTextContent(restaurant.name);
  });
});
