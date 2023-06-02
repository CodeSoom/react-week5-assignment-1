import reducer from './reducer';
import {
  setRegionData, setCategoryData, setRestaurantData, updateSelectedData,
} from './action';

describe('reducer', () => {
  const prevState = {
    regionData: [], categoryData: [], restaurantData: [], selectedData: {},
  };
  describe('fetch된 Region 데이터가 변경되었을 때', () => {
    it('변경된 region state가 반환된다.', () => {
      const state = reducer(prevState, setRegionData({ regionData: [{ id: 1, name: '서울' }] }));
      expect(state.regionData[0].name).toBe('서울');
    });
  });
  describe('fetch된 Category 데이터가 변경되었을 때', () => {
    it('변경된 region state가 반환된다.', () => {
      const state = reducer(prevState, setCategoryData({ categoryData: [{ id: 1, name: '한식' }] }));
      expect(state.categoryData[0].name).toBe('한식');
    });
  });
  describe('fetch된 Restaurant 데이터가 변경되었을 때', () => {
    it('변경된 region state가 반환된다.', () => {
      const state = reducer(prevState, setRestaurantData({ restaurantData: [{ id: 1, name: '함지박식당' }] }));
      expect(state.restaurantData[0].name).toBe('함지박식당');
    });
  });
  describe('클릭한 region과 category가 변경되었을 때 ', () => {
    it('변경된 region state가 반환된다.', () => {
      const state = reducer(prevState, updateSelectedData({
        selectedData: {
          selectedRegion: { id: 1, name: '서울' },
          selectedCategory: { id: 1, name: '한식' },
        },
      }));

      expect(state.selectedData.selectedRegion.name).toBe('서울');
      expect(state.selectedData.selectedCategory.name).toBe('한식');
    });
  });
});
