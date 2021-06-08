import { useDispatch } from 'react-redux';

import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import {
  loadDate,
  loadRestaurants,
} from './actions';

import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from './services/api';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./services/api');

describe('actions', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    fetchCategories.mockImplementation(async () => [
      { id: 1, name: '한식' },
      { id: 2, name: '중식' },
    ]);

    fetchRegions.mockImplementation(
      async () => [{ id: 1, name: '서울' }],
    );

    fetchRestaurants.mockImplementation(async () => [
      { id: 1, categoryId: 1, name: '양천주가' },
    ]);
  });

  it('loadDate', async () => {
    const store = mockStore({});

    await store.dispatch(loadDate());

    const actions = store.getActions();

    expect(actions[0].payload.regions[0]).toEqual({ id: 1, name: '서울' });
    expect(actions[1].payload.categories[0]).toEqual({ id: 1, name: '한식' });
  });

  it('loadRestaurants', async () => {
    const store = mockStore({
      selectedRegion: {
        id: 1,
        name: '서울',
      },
      selectedCategory: {
        id: 1,
        name: '한식',
      },
    });

    await store.dispatch(loadRestaurants());

    const actions = store.getActions();

    expect(actions[0].payload.restaurants[0]).toEqual({ id: 1, categoryId: 1, name: '양천주가' });
  });

  it('loadRestaurants if not selected category or region', async () => {
    const store = mockStore({
      selectedRegion: {
      },
      selectedCategory: {
      },
    });

    await store.dispatch(loadRestaurants());

    const actions = store.getActions();

    expect(actions).toHaveLength(0);
  });
});
