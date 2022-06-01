import { setCategories } from './actions';
import reducer from './reducer';

jest.mock('react-redux');

describe('reducer', () => {
  describe('setCategories', () => {
    it('set categories', () => {
      const state = reducer({
        categories: [],
      }, setCategories([
        { id: 1, name: '한식' },
      ]));

      expect(state.categories).not.toHaveLength(0);
      expect(state.categories[0].name).toBe('한식');
    });
  });
});
