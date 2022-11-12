import {
  loadCategories,
  loadRegions,
  loadRestaurants,
  setCategories,
  setRegions,
  setRestaurants,
} from './actions';

import { categories, regions, restaurants } from '../fixtures/data';

jest.mock('api');

describe('actions', () => {
  const dispatch = jest.fn();

  describe('loadCategories', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(categories),
      }));
    });

    it('setCategories를 호출한다 ', async () => {
      await loadCategories()(dispatch);

      expect(dispatch).toBeCalledWith(setCategories(categories));
    });
  });

  describe('loadRegions', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(regions),
      }));
    });

    it('setRegions을 호출한다 ', async () => {
      await loadRegions()(dispatch);

      expect(dispatch).toBeCalledWith(setRegions(regions));
    });
  });

  describe('loadRestaurants', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(restaurants),
      }));
    });

    it('setRestaurants을 호출한다 ', async () => {
      await loadRestaurants()(dispatch);

      expect(dispatch).toBeCalledWith(setRestaurants(restaurants));
    });
  });
});
