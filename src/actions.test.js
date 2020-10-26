import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import {
  intializeSelectButtons,
  setSelectedButton,
  setRestaurants,
  getRegionAndCategories,
  setRestaurantsAsync,
} from './actions';

import {
  regions, categories, restaurants, selectedButtons
} from '../fixtures/fixture';
import { fetchRegions, fetchCategories, fetchRestaurants } from './services/api';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./services/api');

fetchRegions.mockResolvedValue(regions);
fetchCategories.mockResolvedValue(categories);
fetchRestaurants.mockResolvedValue(restaurants);

describe('intializeSelectButtons', () => {
  it('intializeSelectButtons action이 반환합니다. ', () => {
    const action = intializeSelectButtons({ regions, categories });
    expect(action).toEqual({ type: 'intializeSelectButtons', payload: { regions, categories } });
  });
});

describe('setSelectedButton', () => {
  it('setSelectedButton action이 반환합니다. ', () => {
    const selectedButton = {
      type: 'region',
      value: { id: 1, name: '서울' },
    };
    const action = setSelectedButton(selectedButton);
    expect(action).toEqual({ type: 'setSelectedButton', payload: selectedButton });
  });
});

describe('setRestaurants', () => {
  it('setRestaurants action을 반환합니다. ', () => {
    const action = setRestaurants(restaurants);
    expect(action).toEqual({ type: 'setRestaurants', payload: restaurants });
  });
});

describe('getRegionAndCategories', () => {
  it('intializeSelectButtons action을 반환합니다. ', async () => {
    const store = mockStore({});

    await store.dispatch(getRegionAndCategories());
    expect(store.getActions()).toEqual([intializeSelectButtons({ regions, categories })]);
  });
});

describe('setRestaurantsAsync', () => {
  it('setRestaurants action을 반환합니다.', async () => {
    const store = mockStore({ selectedButtons });

    await store.dispatch(setRestaurantsAsync());
    expect(store.getActions()).toEqual([setRestaurants(restaurants)]);
  });
});
