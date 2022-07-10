import {
  loadRegions,
  loadCategories,
} from './async-actions';

import {
  setCategories,
  setRegions,
} from './actions';

import {
  fetchRegions,
  fetchCategories,
} from '../services/api';

import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';

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

  describe('loadCategories', () => {
    beforeEach(() => {
      fetchCategories.mockResolvedValue(CATEGORIES);
    });

    it('dispatch setCategories', async () => {
      await loadCategories()(dispatch);

      expect(dispatch).toBeCalledWith(setCategories(CATEGORIES));
    });
  });
});
