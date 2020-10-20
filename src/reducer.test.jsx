import reducer from './reducer';

import { loadCategory } from './actions';
import { categorysFixture } from '../fixtures/fixtures';

describe('reducer', () => {
  describe('loadCategory', () => {
    it('초기 카테고리 정보를 불러온다.', () => {
      const initialState = {
        categorys: [],
      };

      const { categorys } = reducer({
        initialState,
      }, loadCategory(categorysFixture));

      expect(categorys).not.toHaveLength(0);
    });
  });
});
