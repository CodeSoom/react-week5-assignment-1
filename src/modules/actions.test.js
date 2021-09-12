import {
  setRegions,
  setCategories,
  setRestaurants,
  loadRegions,
  loadCategories,
  loadRestaurants,
} from './actions';

import regions from '../../fixtures/regions';
import categories from '../../fixtures/categories';
import restaurants from '../../fixtures/restaurants';

jest.mock('../services/api');

describe('actions', () => {
  const dispatch = jest.fn();

  describe('setRegions', () => {
    it('changes regions', () => {
      const action = setRegions(regions);

      expect(action.type).toBe('setRegions');
      expect(action.payload.regions).toBe(regions);
    });
  });

  describe('setCategories', () => {
    it('chnages categories', () => {
      const action = setCategories(categories);

      expect(action.type).toBe('setCategories');
      expect(action.payload.categories).toBe(categories);
    });
  });

  describe('setRestaurants', () => {
    it('chnages restaurants', () => {
      const action = setRestaurants(restaurants);

      expect(action.type).toBe('setRestaurants');
      expect(action.payload.restaurants).toBe(restaurants);
    });
  });

  describe('loadRegions', () => {
    it('fetches regions', async () => {
      await loadRegions()(dispatch);

      expect(dispatch).toBeCalled();
    });
  });

  describe('loadCategories', () => {
    it('fetches categories', async () => {
      await loadCategories()(dispatch);

      expect(dispatch).toBeCalled();
    });
  });

  describe('loadRestaurants', () => {
    it('fetches restaurants', async () => {
      const getState = jest.fn(() => ({
        selectedRegion: {
          id: 1,
          name: '서울',
        },
        selectedCategory: {
          id: 1,
          name: '한식',
        },
      }));

      await loadRestaurants()(dispatch, getState);

      expect(dispatch).toBeCalled();
    });
  });
});
