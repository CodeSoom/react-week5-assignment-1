import { fetchRestaurants } from './restaurant';

import RESTAURANT from '../../__fixtures__/restaurants.json';

describe('fetchRestaurants', () => {
  global.fetch = jest.fn().mockResolvedValue({
    json() {
      return RESTAURANT;
    },
  });

  it('returns restaurants', async () => {
    const restaurants = await fetchRestaurants('regionName', 'categoryId');
    expect(restaurants).toEqual(RESTAURANT);
  });
});
