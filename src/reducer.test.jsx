import reducer from './reducer';

import { loadRestaurantInfo } from './actions';
import { categorysFixture, regionsFixture } from '../fixtures/fixtures';

describe('reducer', () => {
  describe('loadRestaurantInfo', () => {
    it('초기 "Restaurant" 정보를 불러온다.', () => {
      const initialState = {
        categorys: [],
        regions: [],
      };

      const { categorys } = reducer({
        initialState,
      }, loadRestaurantInfo({ type: 'categorys', info: categorysFixture }));

      expect(categorys).not.toHaveLength(0);

      const { regions } = reducer({
        initialState,
      }, loadRestaurantInfo({ type: 'regions', info: regionsFixture }));

      expect(regions).not.toHaveLength(0);
    });
  });
});
