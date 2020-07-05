import {
  setRegions,
  loadRegions,
  selectRegion,
  setCategories,
  loadCategories,
} from './actions';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';

jest.mock('react-redux');
jest.mock('./services/api');

describe('actions', () => {
  describe('Regions', () => {
    it('setRegions', () => {
      const action = setRegions(regions);

      expect(action.type).toBe('setRegions');
      expect(action.payload.regions).toBe(regions);
    });

    it('loadRegions', async () => {
      const dispatch = jest.fn();

      await loadRegions()(dispatch);

      expect(dispatch).toBeCalledTimes(1);
    });

    it('selectRegion', () => {
      const regionId = 1;
      const action = selectRegion(regionId);

      expect(action.type).toBe('selectRegion');
      expect(action.payload.regionId).toBe(regionId);
    });
  });

  describe('Categories', () => {
    it('setCategories', () => {
      const action = setCategories(categories);

      expect(action.type).toBe('setCategories');
      expect(action.payload.categories).toBe(categories);
    });

    it('loadCategories', async () => {
      const dispatch = jest.fn();

      await loadCategories()(dispatch);

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
