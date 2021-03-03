import {
  setRegions, setCategories, setRestaurants,
  selectCategory, selectRegion,
} from './actions';
import reducer from './reducer';

describe('reducer', () => {
  describe('default action', () => {
    it('returns initial state', () => {
      const state = reducer();

      expect(state.regions).toHaveLength(0);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const regions = [{
        id: 1,
        name: '서울',
      }];

      const state = reducer({
        regions: [],
      }, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const categories = [{
        id: 1,
        name: '한식',
      }];

      const state = reducer({
        categories: [],
      }, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const restaurants = [{
        id: 1,
        name: '양천주가',
      }];

      const state = reducer({
        categories: [],
      }, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('selectCategory', () => {
    it('changes selectedCategory', () => {
      const state = reducer({
        selectedCategory: null,
      }, selectCategory({ id: 1, name: '한식' }));

      expect(state.selectedCategory.id).toBe(1);
    });
  });

  describe('selectRegion', () => {
    it('changes selectRegionId', () => {
      const state = reducer({
        selectedRegion: null,
      }, selectRegion({ id: 1, name: '서울' }));

      expect(state.selectedRegion.name).toBe('서울');
    });
  });
});
