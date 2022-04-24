import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  loadLocations,
  loadCategories,
  loadRestaurants,
} from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('./services/api');

describe('async actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('loadLocations', () => {
    it('dispatches setLocations', async () => {
      const store = mockStore({});

      await store.dispatch(loadLocations());

      expect(store.getActions()).toEqual([
        {
          type: 'setLocations',
          payload: {
            locations: [],
          },
        },
      ]);
    });
  });

  describe('loadCategories', () => {
    it('dispatches setCategories', async () => {
      const store = mockStore({});

      await store.dispatch(loadCategories());

      expect(store.getActions()).toEqual([
        {
          type: 'setCategories',
          payload: {
            categories: [],
          },
        },
      ]);
    });
  });

  describe('loadRestaurants', () => {
    it('dispatches setRestaurants', async () => {
      const store = mockStore({});

      await store.dispatch(loadRestaurants({ locationName: '서울', categoryId: 1 }));

      expect(store.getActions()).toEqual([
        {
          type: 'setRestaurants',
          payload: {
            restaurants: [],
          },
        },
      ]);
    });
  });
});
