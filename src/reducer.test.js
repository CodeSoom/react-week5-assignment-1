import { setCategories } from './action';
import reducer from './reducer';

describe('reducer', () => {
  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [
          {
            id: 1,
            name: '한식',
          },
        ],
      };

      const state = reducer(initialState, setCategories);

      expect(state.categories).toHaveLength(1);
    });
  });
});
