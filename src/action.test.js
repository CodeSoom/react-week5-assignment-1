import {
  loadCategories,
  loadRegions,
  loadRestaurants,
} from './action';

import { categories, regions, restaurants } from '../fixtures/data';

jest.mock('./services/api');

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
      expect(dispatch).toBeCalled();
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

      expect(dispatch).toBeCalled();
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

      expect(dispatch).toBeCalled();
    });
  });
});
