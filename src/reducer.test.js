import reducer from './reducer';

import {
  SET_REGIONS,
  SET_CATEGORIES,
  SET_SELECTED_REGION,
  SET_SELECTED_CATEGORY,
} from './actions';

describe('reducer', () => {
  describe(SET_REGIONS, () => {
    it('sets restaurant regions', () => {
      const previousState = {
        regions: [],
      };
      const action = {
        type: SET_REGIONS,
        payload: [{ id: 1, name: '서울' }],
      };
      const state = reducer(previousState, action);

      expect(state.regions).toMatchObject([{ id: 1, name: '서울' }]);
    });
  });

  describe(SET_CATEGORIES, () => {
    it('sets restaurant categories', () => {
      const previousState = {
        categories: [],
      };
      const action = {
        type: SET_CATEGORIES,
        payload: [{ id: 1, name: '한식' }],
      };
      const state = reducer(previousState, action);

      expect(state.categories).toMatchObject([{ id: 1, name: '한식' }]);
    });
  });

  describe(SET_SELECTED_REGION, () => {
    it('sets restaurant region', () => {
      const previousState = {
        selectedRegion: null,
      };
      const action = {
        type: SET_SELECTED_REGION,
        payload: { id: 1, name: '서울' },
      };
      const state = reducer(previousState, action);

      expect(state.selectedRegion).toMatchObject({ id: 1, name: '서울' });
    });
  });

  describe(SET_SELECTED_CATEGORY, () => {
    it('sets selected restaurnat category', () => {
      const previousState = {
        selectedCategory: {},
      };
      const action = {
        type: SET_SELECTED_CATEGORY,
        payload: { id: 1, name: '한식' },
      };
      const state = reducer(previousState, action);

      expect(state.selectedCategory).toMatchObject({ id: 1, name: '한식' });
    });
  });
});
