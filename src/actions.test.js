import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadInitialData,
  setRegions,
  setCategories,
  loadRestaurants,
  setRestaurants,
} from './actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./services/api');

describe('actions', () => {
  describe('loadInitialData', () => {
    it('runs setRegions and setCategories', async () => {
      const store = mockStore({});

      await store.dispatch(loadInitialData());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions({ regions: [] }));
      expect(actions[1]).toEqual(setCategories({ categories: [] }));
    });

    describe('loadRestaurants', () => {
      it('runs setRestaurants with regionName and categoryId', async () => {
        const store = mockStore({
          region: {
            id: 1,
            name: '서울',
          },
          category: {
            id: 1,
            name: '한식',
          },
        });

        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurants({ restaurants: [] }));
      });

      it('runs setRestaurants without regionName and categoryId', async () => {
        const store = mockStore({});

        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurants({ restaurants: [] }));
      });
    });
  });
});
