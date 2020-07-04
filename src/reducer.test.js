import reducer from './reducer';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';

import {
  updateSelected,
  setRegions,
  setCategories,
} from './actions';

describe('reducer', () => {
  const initialState = {
    selected: {
      region: '',
      categoryId: '',
    },
    regions: [],
    categories: [],
    restaurants: [],
  };

  describe('updateSeleted', () => {
    it('selected category id를 변경한다.', () => {
    // Given
      const previousState = {
        selected: {
          categoryId: '',
        },
      };
      const id = 1;

      // When
      const newState = reducer(previousState, updateSelected('categoryId', id));

      // Then
      expect(newState.selected.categoryId).toBe(id);
    });

    it('selected region을 변경한다.', () => {
    // Given
      const previousState = {
        selected: {
          region: '',
        },
      };
      const region = '서울';

      // When
      const newState = reducer(previousState, updateSelected('region', region));

      // Then
      expect(newState.selected.region).toBe(region);
    });
  });

  context('without existed action', () => {
    it('state를 반환한다.', () => {
      const state = reducer(initialState,
        {
          type: 'notExistedAction',
        });

      expect(state).toEqual(initialState);
    });
  });

  context('without state', () => {
    it('initialState를 사용한다.', () => {
      const state = reducer(undefined, updateSelected('categoryId', 1));

      expect(state.selected.categoryId).toBe(1);
    });
  });

  describe('setRegionss', () => {
    it('regions가 변경된다.', () => {
      const newState = reducer(initialState, setRegions(regions));

      expect(newState.regions).toEqual(regions);
    });
  });

  describe('setCategories', () => {
    it('categories가 변경된다.', () => {
      const newState = reducer(initialState, setCategories(categories));

      expect(newState.categories).toEqual(categories);
    });
  });
});
