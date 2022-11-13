import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadInitialData,
  loadRestaurants,
} from './actions';

jest.mock('./services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  describe('loadInitialData', () => {
    const store = mockStore({});

    it('update loading state and set regions', async () => {
      await store.dispatch(loadInitialData());

      const actions = store.getActions();

      expect(actions[0].type).toBe('setRegions');
    });

    it('update loading state and set categories', async () => {
      await store.dispatch(loadInitialData());

      const actions = store.getActions();

      expect(actions[1].type).toBe('setCategories');
    });
  });

  describe('loadRestaurants', () => {
    context('when region and category are selected', () => {
      it('updates restaurants data', async () => {
        const store = mockStore({
          selectedRegion: '서울',
          selectedCategory: 1,
        });

        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions[0].type).toBe('setRestaurants');
      });
    });

    context('when region and category are not selected', () => {
      it('updates nothing', async () => {
        const store = mockStore({
          selectedRegion: '',
          selectedCategory: '',
        });

        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });
});
