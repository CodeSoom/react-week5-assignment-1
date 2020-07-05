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

    it('regions를 fetch 한다.', async () => {
      await store.dispatch(loadRegions());
      const actions = await store.getActions();

      expect(actions[0].type).toBe('setRegions');
    });
  });

  describe('loadCategories', () => {
    const store = mockStore({});

    it('categories를 fetch 한다.', async () => {
      await store.dispatch(loadCategories());
      const actions = await store.getActions();

      expect(actions[0].type).toBe('setCategories');
    });
  });

  describe('loadRestaurants', () => {
    const withoutCategoryIdStore = mockStore({
      selected: {
        region: '서울',
        categoryId: '',
      },
    });

    context('without categoryId', () => {
      it('동작하지 않는다.', async () => {
        await withoutCategoryIdStore.dispatch(loadRestaurants());
        const actions = withoutCategoryIdStore.getActions();

        expect(actions).toHaveLength(0);
      });
    });

    const withSelectedStore = mockStore({
      selected: {
        region: '서울',
        categoryId: '1',
      },
    });

    context('with region and categoryId', () => {
      it('restaurants를 가져온다.', async () => {
        await withSelectedStore.dispatch(loadRestaurants());
        const actions = withSelectedStore.getActions();

        expect(actions[0].type).toBe('setRestaurants');
      });
    });
  });
});
