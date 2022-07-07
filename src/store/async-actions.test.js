import {
  loadRegions,
} from './async-actions';

import {
  setRegions,
} from './actions';

import {
  fetchRegions,
} from '../services/api';

import REGIONS from '../fixtures/regions';

jest.mock('../services/api');

describe('async-actions', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  describe('loadRegions', () => {
    beforeEach(() => {
      fetchRegions.mockResolvedValue(REGIONS);
    });

    it('dispatch setRegions', async () => {
      await loadRegions()(dispatch);

      expect(dispatch).toBeCalledWith(setRegions(REGIONS));
    });
  });
});
