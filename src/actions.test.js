import { loadRegions, loadCategories, loadRestaurants } from './actions';
import { fetchRegions, fetchCategories, fetchRestaurants } from './services/api';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

jest.mock('./services/api');

async function dispatch(thunk) {
  const actions = [];

  await thunk((action) => actions.push(action), () => ({
    filter: {
      regionName: null,
      categoryId: null,
    },
  }));

  return actions;
}

describe('actions', () => {
  describe('loadRegions', () => {
    beforeEach(() => {
      fetchRegions.mockResolvedValue(regions);
    });

    it('dispatches setRegions', async () => {
      const actions = await dispatch(loadRegions());

      expect(actions).toEqual([
        {
          type: 'setRegions',
          payload: { regions },
        },
      ]);
    });
  });

  describe('loadCategories', () => {
    beforeEach(() => {
      fetchCategories.mockResolvedValue(categories);
    });
    it('dispatches setCategories', async () => {
      const actions = await dispatch(loadCategories());

      expect(actions).toEqual([
        {
          type: 'setCategories',
          payload: { categories },
        },
      ]);
    });
  });

  describe('loadRestaurants', () => {
    beforeEach(() => {
      fetchRestaurants.mockResolvedValue(restaurants);
    });
    it('dispatches setRestaurants', async () => {
      const actions = await dispatch(loadRestaurants());

      expect(actions).toEqual([
        {
          type: 'setRestaurants',
          payload: { restaurants },
        },
      ]);
    });
  });
});
