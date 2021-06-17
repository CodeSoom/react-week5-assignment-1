import reducer from './reducer';

import {
  setRegions,
  setCategories,
  selectRegion,
  selectCategory,
  setRestaurants,
} from './actions';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: [],
      };
      const restaurants = [{ id: 1, name: '마녀주방' }];
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });
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

  describe('selectCategory', () => {
    it('changes selected category text', () => {
      const categories = [{ id: 1, name: '한식' }];
      const initialState = {
        selectedCategory: null,
        categories,
      };

      const state = reducer(initialState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });

  context('undefined action type', () => {
    it('returns previousState', () => {
      const previousState = {
        restaurants: [],
      };
      const undefinedAction = {
        type: 'no ation',
      };
      const state = reducer(previousState, undefinedAction);

      expect(state === previousState);
    });
  });

  context('when previousState is undefined', () => {
    it('returns initialState', () => {
      const initialState = {
        restaurants: [],
      };
      const undefinedAction = {
        type: 'no ation',
      };
      const state = reducer(undefined, undefinedAction);
      expect(state === initialState);
    });
  });
});
