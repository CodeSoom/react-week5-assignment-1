import reducer from './reducer';
import {
  setRegions, setCategories, setRestaurants, setSelectedRegionAndCategory,
} from './action';
import { regions, categories, restaurants } from '../fixtures/data';

describe('reducer', () => {
  const prevState = {
    regions: [],
    categories: [],
    restaurants: [],
    selectedRegionAndCategory: { selectedRegion: {}, selectedCategory: {} },

  };
  describe('fetch된 Region 데이터가 변경되었을 때', () => {
    it('변경된 region state가 반환된다.', () => {
      const state = reducer(prevState, setRegions({ regions }));
      expect(state.regions[0].name).toBe('서울');
    });
  });
  describe('fetch된 Category 데이터가 변경되었을 때', () => {
    it('변경된 region state가 반환된다.', () => {
      const state = reducer(prevState, setCategories({ categories }));
      expect(state.categories[0].name).toBe('한식');
    });
  });
  describe('fetch된 Restaurant 데이터가 변경되었을 때', () => {
    it('변경된 region state가 반환된다.', () => {
      const state = reducer(prevState, setRestaurants({ restaurants }));
      expect(state.restaurants[0].name).toBe('코코식당');
    });
  });
  describe('클릭한 region과 category가 변경되었을 때 ', () => {
    it('변경된 region state가 반환된다.', () => {
      const state = reducer(prevState, setSelectedRegionAndCategory({
        selectedRegion: { id: 1, name: '서울' },
        selectedCategory: { id: 1, name: '한식' },
      }));

      expect(state.selectedRegionAndCategory.selectedRegion.name).toBe('서울');
      expect(state.selectedRegionAndCategory.selectedCategory.name).toBe('한식');
    });
  });
});
