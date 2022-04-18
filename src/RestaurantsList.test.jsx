import { render } from '@testing-library/react';

import RestaurantsList from './RestaurantsList';

import restaurants from '../fixtures/restaurants';

test('RestaurantsList', () => {
  const { queryByText } = render((
    <RestaurantsList restaurants={restaurants} />
  ));

  expect(queryByText('양천주가')).not.toBeNull();
});
