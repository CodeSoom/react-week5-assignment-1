import reducer from './reducer';

import { setRestaurants, updateRestaurant } from './actions';
import { categoriesFixture, regionsFixture } from '../fixtures/fixtures';

describe('reducer', () => {
  describe('setRestaurants', () => {
    const initialState = {
      categories: [],
      regions: [],
    };

    it('초기 "Restaurant" 정보를 불러온다.', () => {
      const { categories } = reducer({
        initialState,
      }, setRestaurants({ type: 'categories', info: categoriesFixture }));

      expect(categories).not.toHaveLength(0);

      const { regions } = reducer({
        initialState,
      }, setRestaurants({ type: 'regions', info: regionsFixture }));

      expect(regions).not.toHaveLength(0);
    });
  });

  describe('updateRestaurant', () => {
    const initialState = {
      category: null,
      region: null,
    };

    it('change region and category id', () => {
      const { category } = reducer({
        initialState,
      }, updateRestaurant({ type: 'category', id: 1 }));

      expect(category).toBe(1);

      const { region } = reducer({
        initialState,
      }, updateRestaurant({ type: 'region', id: 2 }));

      expect(region).toBe(2);
    });
  });

  describe('with undefined action', () => {
    it('returns previous state', () => {
      const { categories } = reducer(
        {
          categories: [
            { id: 1, name: '한식' },
          ],
        },
        { type: 'undefined', payload: {} },
      );

      expect(categories).toHaveLength(1);
    });

    it("don't returns previous state", () => {
      const { categories } = reducer(
        undefined,
        { type: 'undefined', payload: {} },
      );

      expect(categories).toHaveLength(0);
    });
  });
});
