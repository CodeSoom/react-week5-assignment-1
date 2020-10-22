import LoadingStateReducer from './LoadingStateReducer';

import {
  updateRestaurantsLoading,
  updateCategoriesLoading,
  updateRegionsLoading,
} from '../actions';

describe('LoadingStateReducer', () => {
  describe('updateRestaurantsLoading', () => {
    it('changes restaurants loading state', () => {
      const state = LoadingStateReducer({
        restaurantsloading: false,
      }, updateRestaurantsLoading(true));

      expect(state.restaurantsLoading).toBe(true);
    });
  });

  describe('updateCategoriesLoading', () => {
    it('changes categories loading state', () => {
      const state = LoadingStateReducer({
        categoriesloading: false,
      }, updateCategoriesLoading(true));

      expect(state.categoriesLoading).toBe(true);
    });
  });

  describe('updateRegionsLoading', () => {
    it('changes Regions loading state', () => {
      const state = LoadingStateReducer({
        regionsloading: false,
      }, updateRegionsLoading(true));

      expect(state.regionsLoading).toBe(true);
    });
  });

  it('returns initial state when state is undefined', () => {
    const initialState = {
      restaurantsLoading: false,
      categoriesLoading: false,
      regionsLoading: false,
    };

    expect(LoadingStateReducer()).toEqual(initialState);
  });
});
