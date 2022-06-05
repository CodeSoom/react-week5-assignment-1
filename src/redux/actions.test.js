import {
  loadRegions,
  setRegions,
  loadCategories,
  setCategories,
  loadRestaurants,
  setRestaurants,
  setErrorMessage,
} from './actions';

import regions from '../../fixture/regions';
import categories from '../../fixture/categories';
import restaurants from '../../fixture/restaurants';

import { fetchRegions, fetchCategories, fetchRestaurants } from '../services/api';

jest.mock('../services/api', () => ({
  fetchRegions: jest.fn(),
  fetchCategories: jest.fn(),
  fetchRestaurants: jest.fn(),
}));

describe('redux actions loadRegions', () => {
  context('호출이 성공하면', () => {
    beforeEach(() => {
      fetchRegions.mockResolvedValue(regions);
    });

    it('setRegions가 호출된다.', async () => {
      const dispatch = jest.fn();

      await loadRegions()(dispatch);

      expect(dispatch).toHaveBeenCalledWith(setRegions(regions));
    });
  });

  context('호출이 실패하면', () => {
    const error = new Error('지역 목록을 가져오지 못했어요.');

    beforeEach(() => {
      fetchRegions.mockRejectedValue(error);
    });

    it('setErrorMessage가 호출된다.', async () => {
      const dispatch = jest.fn();

      await loadRegions()(dispatch);

      expect(dispatch).toHaveBeenLastCalledWith(setErrorMessage('regions', error.message));
    });
  });
});

describe('redux actions loadCategories', () => {
  context('호출이 성공하면', () => {
    beforeEach(() => {
      fetchCategories.mockResolvedValue(categories);
    });

    it('setCategories가 호출된다.', async () => {
      const dispatch = jest.fn();

      await loadCategories()(dispatch);

      expect(dispatch).toHaveBeenCalledWith(setCategories(categories));
    });
  });

  context('호출이 실패하면', () => {
    const error = new Error('업종 목록을 가져오지 못했어요.');

    beforeEach(() => {
      fetchCategories.mockRejectedValue(error);
    });

    it('setErrorMessage가 호출된다.', async () => {
      const dispatch = jest.fn();

      await loadCategories()(dispatch);

      expect(dispatch).toHaveBeenLastCalledWith(setErrorMessage('categories', error.message));
    });
  });
});

describe('redux actions loadRestaurants', () => {
  context('호출이 성공하면', () => {
    beforeEach(() => {
      fetchRestaurants.mockResolvedValue(restaurants);
    });

    it('setRestaurants가 호출된다.', async () => {
      const dispatch = jest.fn();

      await loadRestaurants(regions[0].name, categories[0].id)(dispatch);

      expect(dispatch).toHaveBeenCalledWith(setRestaurants(restaurants));
    });
  });

  context('호출이 실패하면', () => {
    const error = new Error('레스토랑 목록을 가져오지 못했어요.');

    beforeEach(() => {
      fetchRestaurants.mockRejectedValue(error);
    });

    it('setErrorMessage가 호출된다.', async () => {
      const dispatch = jest.fn();

      await loadRestaurants()(dispatch);

      expect(dispatch).toHaveBeenLastCalledWith(setErrorMessage('restaurants', error.message));
    });
  });
});
