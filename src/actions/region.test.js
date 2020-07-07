import {
  SET_REGIONS, SET_SELECTED_REGIONS_ID,
  setRegions, loadRegions, setSelectedRegionId,
} from './region';

import { fetchRegions } from '../services/api';

import REGIONS from '../__fixtures__/regions.json';

jest.mock('../services/api');

describe('Region Action Creator', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    fetchRegions.mockResolvedValue(REGIONS);
  });

  it('setRegions', () => {
    // When
    const action = setRegions(REGIONS);
    // Then
    expect(action.type).toBe(SET_REGIONS);
    expect(action.payload.regions).toBe(REGIONS);
  });

  it('loadRegions', async () => {
    // When
    const action = loadRegions();
    await action(dispatch);
    // Then
    expect(fetchRegions).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: SET_REGIONS,
      payload: { regions: REGIONS },
    });
  });

  it('setSelectedRegionId', async () => {
    // When
    const action = setSelectedRegionId(REGIONS[0].id);
    // Then
    expect(action.type).toBe(SET_SELECTED_REGIONS_ID);
    expect(action.payload.selectedRegionId).toBe(REGIONS[0].id);
  });
});
