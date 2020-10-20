import reducer from './reducer';

import { loadRestaurantInfo } from './actions';
import { categoriesFixture, regionsFixture } from '../fixtures/fixtures';

describe('reducer', () => {
  describe('loadRestaurantInfo', () => {
    it('초기 "Restaurant" 정보를 불러온다.', () => {
      const initialState = {
        categories: [],
        regions: [],
      };

      const { categories } = reducer({
        initialState,
      }, loadRestaurantInfo({ type: 'categories', info: categoriesFixture }));

      expect(categories).not.toHaveLength(0);

      const { regions } = reducer({
        initialState,
      }, loadRestaurantInfo({ type: 'regions', info: regionsFixture }));

      expect(regions).not.toHaveLength(0);
    });
  });
});
