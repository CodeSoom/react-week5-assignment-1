import reducer from './reducer';

import { setCategories, setRegions, selectRegion } from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('지역 내용 바꾸기', () => {
      const initialState = {
        regions: [],
      };
      const regions = [
        { id: 1, name: '서울' },
      ];
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('카테고리 내용 바꾸기', () => {
      const initialState = {
        categories: [],
      };
      const categories = [
        { id: 1, name: '한식' },
      ];
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('selectRegion', () => {
    const initialState = {
      regions: [
        { id: 1, name: '서울' },
      ],
      selectedRegion: null,
    };
    const state = reducer(initialState, selectRegion(1));
    expect(state.selectedRegion).toEqual({
      id: 1,
      name: '서울',
    });
  });
});
