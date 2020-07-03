import {
  loadRegions,
  setInitRegions,
  loadCategories,
  setInitCategories,
  loadRestaurants,
  setRestaurants,
} from './action';

import { regions, categories, restaurants } from '../__fixture__/data';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

jest.mock('./services/api');

describe('acton', () => {
  describe('loadRegions', () => {
    const dispatch = jest.fn();

    beforeEach(() => {
      dispatch.mockClear();
    });

    context('when successfully fetch data', () => {
      beforeEach(() => {
        fetchRegions.mockResolvedValue(regions);
      });

      it('dispatch setInitRegions', async () => {
        await loadRegions()(dispatch);

        expect(dispatch).toBeCalledWith(setInitRegions(regions));
      });
    });

    context('when fail to fetch data', () => {
      beforeEach(() => {
        fetchRegions.mockRejectedValue(new Error('some error'));
      });

      it('dispatch setInitRegions', async () => {
        await loadRegions()(dispatch);

        expect(dispatch).not.toBeCalled();
      });
    });
  });

  describe('loadCategories', () => {
    const dispatch = jest.fn();

    beforeEach(() => {
      dispatch.mockClear();
    });

    context('when successfully fetch data', () => {
      beforeEach(() => {
        fetchCategories.mockResolvedValue(categories);
      });

      it('dispatch loadCategories', async () => {
        await loadCategories()(dispatch);

        expect(dispatch).toBeCalledWith(setInitCategories(categories));
      });
    });

    context('when fail to fetch data', () => {
      beforeEach(() => {
        fetchCategories.mockRejectedValue(new Error('some error'));
      });

      it('dispatch loadCategories', async () => {
        await loadCategories()(dispatch);

        expect(dispatch).not.toBeCalled();
      });
    });
  });

  describe('loadRestaurants', () => {
    const dispatch = jest.fn();

    beforeEach(() => {
      dispatch.mockClear();
      fetchRestaurants.mockResolvedValue(restaurants);
    });

    context('when successfully fetch data', () => {
      beforeEach(() => {
        fetchRestaurants.mockResolvedValue(restaurants);
      });

      it('dispatch loadCategories', async () => {
        await loadRestaurants()(dispatch);

        expect(dispatch).toBeCalledWith(setRestaurants(restaurants));
      });
    });

    context('when fail to fetch data', () => {
      beforeEach(() => {
        fetchRestaurants.mockRejectedValue(new Error('some error'));
      });

      it('dispatch loadRestaurants', async () => {
        await loadRestaurants()(dispatch);

        expect(dispatch).not.toBeCalled();
      });
    });
  });
});
