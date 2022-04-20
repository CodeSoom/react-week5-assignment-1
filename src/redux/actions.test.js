import configureMockStore from 'redux-mock-store';

import thunk from 'redux-thunk';
import { loadRegions, loadCategories, loadRestaurants } from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('loadRegions', () => {
    it('dispatches setRegions after fetchRegions', () => {
      const store = mockStore({});
      store.dispatch(loadRegions());

      expect(store.getActions()).toEqual({
        type: 'setRegions',
        payload: {
          regions: [],
        },
      });
    });
  });

  describe('loadCategories', () => {
    it('dispatches setCategories after fetchCategories', () => {
      const store = mockStore({});
      store.dispatch(loadCategories());

      expect(store.getActions()).toEqual({
        type: 'setCategories',
        payload: {
          regions: [],
        },
      });
    });
  });

  describe('loadRestaurants', () => {
    it('dispatches setRestaurants after fetchRestaurants', () => {
      const store = mockStore({});
      store.dispatch(loadRestaurants({ categoryId: 1, regionName: '서울' }));

      expect(store.getActions()).toEqual({
        type: 'setRestaurants',
        payload: {
          regions: [],
        },
      });
    });
  });
});
