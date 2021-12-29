import { changeCategory, changeRegion } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  describe('changeRegion', () => {
    it('넘겨받은 regionName 으로 변경후, 새로운 state 를 반환한다. ', () => {
      const prevState = {
        selected: {
          regionName: null,
        },
      };

      const action = changeRegion(1);

      const state = reducer(prevState, action);

      expect(state).toEqual({
        selected: {
          regionName: 1,
        },
      });
    });
  });

  describe('changeCategory', () => {
    it('넘겨받은 categoryId 으로 변경후, 새로운 state 를 반환한다. ', () => {
      const prevState = {
        selected: {
          categoryId: null,
        },
      };

      const action = changeCategory(1);

      const state = reducer(prevState, action);

      expect(state).toEqual({
        selected: {
          categoryId: 1,
        },
      });
    });
  });
});
