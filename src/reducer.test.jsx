import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import reducer from './reducer';

import {
  regions,
  categories,
  restaurants,
} from '../fixtures';

import {
  setCategories,
  setRegions,
  setSelected,
  setRestaurnats,
  loadRegions,
  loadCategories,
  loadRestaurnats,
} from './actions';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

jest.mock('./services/api');

describe('reducer', () => {
  it('returns default parameter, initial state', () => {
    const state = reducer();

    expect(state.regions).toHaveLength(0);
    expect(state.categories).toHaveLength(0);
    expect(state.restaurants).toHaveLength(0);
    expect(state.selected.region.name).toBe('');
    expect(state.selected.category.id).toBe('');
  });

  it('returns state', () => {
    const state = reducer({ restaurants });

    expect(state.restaurants[0].name).toBe('양천주가');
    expect(state.restaurants[1].name).toBe('한국식 초밥');
    expect(state.restaurants[2].name).toBe('김초밥');
  });

  it('changes regions', () => {
    const state = reducer({ regions }, setRegions(regions));

    expect(state.regions[0].name).toBe('서울');
    expect(state.regions[1].name).toBe('대전');
    expect(state.regions[2].name).toBe('대구');
  });

  it('changes categories', () => {
    const state = reducer({ categories }, setCategories(categories));

    expect(state.categories[0].id).toBe(1);
    expect(state.categories[1].id).toBe(2);
    expect(state.categories[2].id).toBe(3);
  });

  it('changes restaurants', () => {
    const state = reducer({}, setRestaurnats(restaurants));

    expect(state.restaurants[0].name).toBe('양천주가');
    expect(state.restaurants[1].name).toBe('한국식 초밥');
    expect(state.restaurants[2].name).toBe('김초밥');
  });

  it('changes selected', () => {
    const selected = {
      region: {
        id: 1,
        name: '서울',
      },
      category: {
        id: 1,
        name: '한식',
      },
    };
    const state = reducer({
      selected: {
        region: '',
        category: '',
      },
    }, setSelected(selected));

    expect(state.selected.region.name).toBe('서울');
    expect(state.selected.category.name).toBe('한식');
  });
});

describe('loadData', () => {
  const middlewares = [thunk];

  const mockStore = configureStore(middlewares);

  describe('loadRegions', () => {
    const store = mockStore({});

    fetchRegions.mockResolvedValue(regions[0]);

    it('executes fetching regions', async () => {
      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[0].payload.regions).toEqual(regions[0]);
    });
  });

  describe('loadCategories', () => {
    const store = mockStore({});

    fetchCategories.mockResolvedValue(categories[0]);

    it('executes fetching categories', async () => {
      await store.dispatch(loadCategories());

      const actions = await store.getActions();

      expect(actions[0].payload.categories).toEqual(categories[0]);
    });
  });

  describe('loadRestaurants', () => {
    const store = mockStore({});

    fetchRestaurants.mockResolvedValue(restaurants[0]);

    it('executes fetching restaurants', async () => {
      await store.dispatch(loadRestaurnats({
        region: '서울',
        category: '한식',
      }));

      const actions = store.getActions();

      expect(actions[0].payload.restaurants).toEqual(restaurants[0]);
    });
  });
});
