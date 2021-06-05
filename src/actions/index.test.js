import {
  loadCategories,
  loadRegions,
  loadRestaurants,
  setCategories,
  setRegions,
  setRestaurants,
} from '.';

import { regions } from '../../fixtures/regions';
import { categories } from '../../fixtures/categories';
import { restaurants } from '../../fixtures/restaurants';

jest.mock('../services/api');

describe('actions', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  describe('loadRegions', () => {
    it('passes "setRegion" action', async () => {
      await loadRegions()(dispatch);

      expect(dispatch).toBeCalledWith(setRegions(regions));
    });
  });

  describe('loadCategories', () => {
    it('passes "setCategories" action', async () => {
      await loadCategories()(dispatch);

      expect(dispatch).toBeCalledWith(setCategories(categories));
    });
  });

  describe('loadRestaurants', () => {
    context('with region, categoryId', () => {
      it('passes "setRestaurants" action', async () => {
        const getState = jest.fn(() => ({
          search: {
            region: '부산',
            categoryId: '1',
          },
        }));

        await loadRestaurants()(dispatch, getState);

        expect(dispatch).toBeCalledWith(setRestaurants(restaurants));
      });
    });

    context('without region', () => {
      it('doesn\'t passes "setRestaurants" action', async () => {
        const getState = jest.fn(() => ({
          search: {
            region: '',
            categoryId: '1',
          },
        }));

        await loadRestaurants()(dispatch, getState);

        expect(dispatch).not.toBeCalled();
      });
    });

    context('without categoryId', () => {
      it('doesn\'t passes "setRestaurants" action', async () => {
        const getState = jest.fn(() => ({
          search: {
            region: '부산',
            categoryId: '',
          },
        }));

        await loadRestaurants()(dispatch, getState);

        expect(dispatch).not.toBeCalled();
      });
    });
  });
});
