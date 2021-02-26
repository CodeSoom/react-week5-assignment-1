import reducer from './reducer';

import {
  setRegions,
  setCategories,
  selectRegion,
} from './actions';

import { regions, categories } from '../fixtures/restaurants';

describe('reducer', () => {
  const initialState = {
    regions: [],
    categories: [],
    selectedRegion: null,
  };

  it('파라미터의 값이 없을 때는 initialState로 상태를 업데이트한다.', () => {
    const state = reducer();

    expect(state).toEqual(initialState);
  });

  describe('setRegions', () => {
    it('regions의 데이터를 받아서 상태를 업데이트한다.', () => {
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).not.toHaveLength(0);
    });
  });

  describe('setCategories', () => {
    it('categories의 데이터를 받아서 상태를 업데이트한다.', () => {
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).not.toHaveLength(0);
    });
  });

  describe('selectRegion', () => {
    it('클릭된 지역으로 selectedRegion 상태를 업데이트한다.', () => {
      const state = reducer(
        initialState,
        selectRegion({id: 1, name: '서울' }),
      );

      expect(state.selectedRegion).not.toBeNull();
    });
  });
});
