import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import {
  loadRegions,
  loadCategories,
  loadRestaurants,
  setRegions,
  setCategories,
  setRestaurants,
} from './actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./services/api');

describe('actions', () => {
  describe('Execute fetch data', () => {
    it('Regions data', async () => {
      const store = mockStore({});

      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions([]));
    });

    it('Categories data', async () => {
      const store = mockStore({});

      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCategories([]));
    });
  });

  describe('loadRestaurants', () => {
    context('with selectedRegion and selectedCategory', () => {
      it('runs setRestaurants', async () => {
        const store = mockStore({
          selectRegion: '서울',
          selectCategoryId: 1,
        });
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurants([]));
      });
    });

    context('without selectedRegion', () => {
      it('does\'nt run any actions', async () => {
        const store = mockStore({
          selectRegion: '서울',
        });
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });

    context('without selectedCategory', () => {
      it('does\'nt run any actions', async () => {
        const store = mockStore({
          selectCategoryId: 1,
        });
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });
});
