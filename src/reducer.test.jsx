import reducer from './reducer';

import {
  setRegions,
  setCategories,
  selectRegion,
} from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it(
      'changes regions', () => {
        const initialState = {
          regions: [],
        };
        const regions = [{ id: 1, name: '서울' }];
        const state = reducer(initialState, setRegions(regions));

        expect(state.regions).toHaveLength(1);
      },
    );
  });
  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        regions: [],
      };
      const categories = [{ id: 1, name: '한식' }];
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region text', () => {
      const regions = [{ id: 1, name: '서울' }];
      const initialState = {
        selectedRegion: null,
        regions,
      };

      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });
});
