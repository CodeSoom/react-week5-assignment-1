import regions from '../fixtures/regions';

import { setRegions } from './actions';
import { loadRegions } from './async-actions';
import { fetchRegions } from './services/api';

jest.mock('./services/api');

describe('async-actions', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('loadRegions', () => {
    it('fetches regions', async () => {
      await loadRegions()(dispatch);

      expect(fetchRegions).toBeCalled();
    });

    it('dispatches setRegions', async () => {
      await loadRegions()(dispatch);

      expect(dispatch).toBeCalledWith(setRegions(regions));
    });
  });
});
