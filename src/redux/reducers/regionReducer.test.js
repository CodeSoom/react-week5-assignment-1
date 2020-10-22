import regionReducer from './regionReducer';

import {
  setRegions,
  updateRegionsLoading,
  selectRegion,
} from '../actions';

import regions from '../../../fixtures/regions';

describe('regionReducer', () => {
  describe('setRegions', () => {
    it('changes regions', () => {
      const state = regionReducer({
        regions: [],
      }, setRegions(regions));

      expect(state.regions).not.toHaveLength(0);
    });
  });

  describe('updateRegionsLoading', () => {
    it('changes Regions loading state', () => {
      const state = regionReducer({
        loading: false,
      }, updateRegionsLoading(true));

      expect(state.loading).toBe(true);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region name', () => {
      const state = regionReducer({
        selectedName: '서울',
      }, selectRegion('부산'));

      expect(state.selectedName).toBe('부산');
    });
  });

  it('returns initial state when state is undefined', () => {
    const initialState = {
      regions: [],
      loading: false,
      selectedName: '',
    };

    expect(regionReducer()).toEqual(initialState);
  });
});
