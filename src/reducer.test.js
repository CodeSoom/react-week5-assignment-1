import { setCategories } from './actions';
import reducer from './reducer';

jest.mock('react-redux');

describe('reducer', () => {
  describe('setCategories', () => {
    it('changes categories', () => {
      const state = reducer({
        categories: [],
      }, setCategories([
        { id: 1, name: '한식' },
      ]));

      expect(state.categories).toHaveLength(1);
      expect(state.categories[0].name).toBe('한식');
    });
  });
});
