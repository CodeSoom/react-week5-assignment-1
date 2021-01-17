import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import reducer from './reducer';
import {
  selectRegion,
  selectCategory,
  loadRegions,
  loadCategories,
  loadRestaurants,
} from './actions';
import regions from '../../fixtures/regions';
import categories from '../../fixtures/categories';
import restaurants from '../../fixtures/restaurants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

function mockFetch(jsonData) {
  global.fetch = jest.fn(async () => ({
    json: async () => jsonData,
  }));
}

beforeEach(() => {
  jest.clearAllMocks();
});

describe('reducer', () => {
  it('selectRegions', () => {
    const state = reducer({
      selected: {
        region: '',
      },
    }, selectRegion('서울'));

    expect(state.selected.region).toBe('서울');
  });

  it('selectCategory', () => {
    const state = reducer({
      selected: {
        category: '',
      },
    }, selectCategory('한식'));

    expect(state.selected.category).toBe('한식');
  });

  it('setRegions', () => {
    const state = reducer({
      regions: [],
    }, {
      type: 'setRegions',
      payload: { regions },
    });

    expect(state.regions).toBe(regions);
  });

  it('setCategories', () => {
    const state = reducer({
      categories: [],
    }, {
      type: 'setCategories',
      payload: { categories },
    });

    expect(state.categories).toBe(categories);
  });

  it('setRestaurants', () => {
    const state = reducer({
      restaurants: [],
    }, {
      type: 'setRestaurants',
      payload: { restaurants },
    });

    expect(state.restaurants).toBe(restaurants);
  });

  context('without state', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: undefined });

      expect(state.regions).toStrictEqual([]);
      expect(state.categories).toStrictEqual([]);
      expect(state.restaurants).toStrictEqual([]);
    });
  });

  it('loadRegions', async () => {
    mockFetch(regions);

    const store = mockStore({});

    await store.dispatch(loadRegions());

    expect(store.getActions()).toStrictEqual([{
      type: 'setRegions',
      payload: { regions },
    }]);
  });

  it('loadCategories', async () => {
    mockFetch(categories);

    const store = mockStore({});

    await store.dispatch(loadCategories());

    expect(store.getActions()).toStrictEqual([{
      type: 'setCategories',
      payload: { categories },
    }]);
  });

  describe('loadRestaurants', () => {
    context('with regionId and categoryId', () => {
      it('can get restaurants', async (done) => {
        mockFetch(restaurants);

        const store = mockStore({
          selected: {
            region: 1,
            category: 1,
          },
        });

        await store.dispatch(loadRestaurants());

        setTimeout(() => {
          expect(store.getActions()).toStrictEqual([
            {
              type: 'setRestaurants',
              payload: { restaurants: [{ id: 1, name: 'loading...' }] },
            },
            {
              type: 'setRestaurants',
              payload: { restaurants },
            },
          ]);

          done();
        }, 1000);
      });
    });

    context('without regionId and categoryId', () => {
      it('can not get restaurants and not work loadRestautants()', async (done) => {
        const store = mockStore({
          selected: {},
        });

        await store.dispatch(loadRestaurants());

        setTimeout(() => {
          expect(store.getActions()).toStrictEqual([]);

          done();
        }, 1000);
      });
    });
  });
});
