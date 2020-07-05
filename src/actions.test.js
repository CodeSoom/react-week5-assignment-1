import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  loadRegions,
  loadCategories,
  loadRestaurants,
} from './actions';

jest.mock('./services/api');

describe('actions', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  describe('loadRegions', () => {
    const store = mockStore({});

    it('setRegions 액션이 실행된다.', async () => {
      await store.dispatch(loadRegions());
      const actions = await store.getActions();

      expect(actions[0].type).toBe('setRegions');
    });
  });

  describe('loadCategories', () => {
    const store = mockStore({});

    it('categories 액션이 실행된다.', async () => {
      await store.dispatch(loadCategories());
      const actions = await store.getActions();

      expect(actions[0].type).toBe('setCategories');
    });
  });

  describe('loadRestaurants', () => {
    context('without categoryId', () => {
      const store = mockStore({
        selected: {
          region: '서울',
          categoryId: '',
        },
      });

      it('동작하지 않는다.', async () => {
        await store.dispatch(loadRestaurants());
        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });

    context('with region and categoryId', () => {
      const store = mockStore({
        selected: {
          region: '서울',
          categoryId: '1',
        },
      });

      it('setRestaurants 액션이 실행된다.', async () => {
        await store.dispatch(loadRestaurants());
        const actions = store.getActions();

        expect(actions[0].type).toBe('setRestaurants');
      });
    });
  });
});
