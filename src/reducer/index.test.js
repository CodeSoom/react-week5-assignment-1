import reducer from '.';

import { setCategories, setRegions } from '../actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changes restaurant region', () => {
      const state = reducer(
        {
          regions: [],
        },
        setRegions([{
          id: 1,
          name: '부산',
        }]),
      );

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes restaurant categories', () => {
      const state = reducer(
        {
          categories: [],
        },
        setCategories([{
          id: 1,
          name: '한식',
        }]),
      );

      expect(state.categories).toHaveLength(1);
    });
  });
});
