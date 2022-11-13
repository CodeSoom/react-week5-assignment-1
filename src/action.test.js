import { waitFor } from '@testing-library/react';

import {
  loadRegions,
  loadCategories,
  loadRestaurant,
  setRegions,
  setCategories,
  selectedRestaurant,
} from './actions';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

jest.mock('api');

describe('async-action', () => {
  const dispatch = jest.fn();

  describe('loadRegions', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(regions),
      }));
    });

    it('setRegions', async () => {
      await waitFor(() => {
        expect(loadRegions).toBeCalledWith(setRegions(regions));
      });
    });
  });

  describe('loadCategories', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(restaurants),
      }));
    });

    it('setCategories', async () => {
      await waitFor(() => {
        expect(loadCategories).toBeCalledWith(setCategories(categories));
      });
    });
  });

  describe('loadRestaurant', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(categories),
      }));
    });

    it('selectedRestaurant', async () => {
      await waitFor(() => {
        loadRestaurant();
        expect(dispatch).toBeCalledWith(selectedRestaurant(restaurants));
      });
    });
  });
});
