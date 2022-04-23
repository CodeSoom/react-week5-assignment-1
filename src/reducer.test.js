import reducer from './reducer';

import {
  selectRegion,
  setRegionList,
  setCategories,
} from './action';

describe('Reducer', () => {
  it('setRegionList', () => {
    const initialState = {
      regionList: [],
    };

    const regionList = [
      {
        id: 1,
        name: '서울',
      },
    ];

    const state = reducer(
      initialState, setRegionList(regionList),
    );
    expect(state.regionList).toHaveLength(1);
  });

  it('selects Region', () => {
    const initialState = {
      regionId: '',
    };

    const state = reducer(
      initialState, selectRegion({ id: 1 }),
    );
    expect(state.regionId).toBe(1);
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [
        {
          id: 1,
          name: '한식',
        },
      ];

      const state = reducer(
        initialState, setCategories(categories),
      );
      expect(state.categories).toHaveLength(1);
    });
  });
});
