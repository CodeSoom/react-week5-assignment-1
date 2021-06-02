import reducer, {
  setCategories,
  setRegions,
} from './groupsSlice';

describe('groupsSlice', () => {
  describe('reducer', () => {
    it('set categories', () => {
      const oldState = { categories: [], regions: [] };
      const newState = { categories: [1, 2, 3], regions: [] };

      expect(reducer(
        oldState,
        setCategories([1, 2, 3]),
      )).toEqual(newState);
    });

    it('set regions', () => {
      const oldState = { categories: [], regions: [] };
      const newState = { categories: [], regions: [1, 2, 3] };

      expect(reducer(
        oldState,
        setRegions([1, 2, 3]),
      )).toEqual(newState);
    });
  });
});
