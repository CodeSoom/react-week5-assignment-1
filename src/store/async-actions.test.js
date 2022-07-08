import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { getCategories, getRegions, getRestaurants } from './async-actions';

import { fetchCategories, fetchRegions, fetchRestaurants } from '../services/api';

jest.mock('../services/api');

const mockStore = configureStore([thunk]);

describe('async-actions', () => {
  const store = mockStore();

  beforeEach(() => {
    store.clearActions();
  });

  describe('getRegions', () => {
    it('fetchRegions', async () => {
      await store.dispatch(getRegions());

      expect(fetchRegions).toBeCalled();
    });
  });

  describe('getCategories', () => {
    it('fetchCategories', async () => {
      await store.dispatch(getCategories());

      expect(fetchCategories).toBeCalled();
    });
  });

  describe('getRestaurants', () => {
    it('fetchRestaurants', async () => {
      await store.dispatch(getRestaurants({ region: '서울', categoryId: '1' }));

      expect(fetchRestaurants).toBeCalled();
    });
  });
});
