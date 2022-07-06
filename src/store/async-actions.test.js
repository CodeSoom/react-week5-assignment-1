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
    afterEach(() => {
      fetchRegions.mockRestore();
    });

    it('calls setRegions action and dispatch', async () => {
      fetchRegions.mockResolvedValue(REGIONS);

      const dispatcher = loadRegions();

      await dispatcher(dispatch);

      expect(dispatch).toBeCalledWith(setRegions(REGIONS));
    });
  });
});
