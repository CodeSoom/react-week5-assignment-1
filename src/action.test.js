import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { loadCategories, loadRegions, loadRestaurants } from './actions';
import { fetchRegions, fetchCategories, fetchRestaurants } from './services/api';

jest.mock('./services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const regions = [
  { id: 1, name: '서울' },
];

const categories = [
  { id: 1, name: '한식' },
];

const restaurants = [
  {
    id: 1,
    categoryId: 1,
    name: '양천주가',
    address: '서울 강남구 123456',
    information: '양천주가 in 서울 강남구 123456',
  },
];

fetchRegions.mockResolvedValue(regions);
fetchCategories.mockResolvedValue(categories);
fetchRestaurants.mockResolvedValue(restaurants);

describe('laodRegions', () => {
  const store = mockStore({});
  it('runs setRegions', async () => {
    await store.dispatch(loadRegions());

    const actions = store.getActions();

    expect(actions[0].payload.regions).toEqual(regions);
  });
});

describe('laodCategories', () => {
  const store = mockStore({});
  it('runs setCategories', async () => {
    await store.dispatch(loadCategories());

    const actions = store.getActions();

    expect(actions[0].payload.categories).toEqual(categories);
  });
});

describe('laodRestaurants', () => {
  const store = mockStore({});
  it('runs setRestaurants', async () => {
    await store.dispatch(loadRestaurants({
      selectedRegion: { id: 1, name: '서울' },
      selectedCategory: { id: 1, name: '한식' },
    }));

    const actions = store.getActions();

    expect(actions[0].payload.restaurants).toEqual(restaurants);
  });
});
