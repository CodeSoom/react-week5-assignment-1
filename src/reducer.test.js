import { chooseRegion, setCategories, setRegions } from './actions';
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

  describe('setRegions', () => {
    it('changes regions', () => {
      const state = reducer({
        regions: [],
      }, setRegions([
        { id: 1, name: '서울' },
      ]));

      expect(state.regions).toHaveLength(1);
      expect(state.regions[0].name).toBe('서울');
    });
  });

  describe('chooseRegion', () => {
    it('set clicked regions', () => {
      const state = reducer({
        clickedRegion: '',
      }, chooseRegion('서울'));

      expect(state.clickedRegion).toBe('서울');
    });
  });

  describe('invalid action', () => {
    it('returns initialState', () => {
      const state = reducer({
        regions: [],
        categories: [],
      }, { type: '' });

      expect(state.categories).toHaveLength(0);
      expect(state.regions).toHaveLength(0);
    });
  });

  describe('empty state', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: '' });

      expect(state.categories).toHaveLength(0);
      expect(state.regions).toHaveLength(0);
    });
  });
});
