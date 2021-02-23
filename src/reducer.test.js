import { setRegions, setCategories } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  describe('default action', () => {
    it('returns initial state', () => {
      const state = reducer();

      expect(state.regions).toHaveLength(0);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const regions = [{
        id: 1,
        name: '서울',
      }];

      const state = reducer({
        regions: [],
      }, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const categories = [{
        id: 1,
        name: '한식',
      }];

      const state = reducer({
        categories: [],
      }, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });
});
