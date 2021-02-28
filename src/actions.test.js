import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import category from '../fixture/category';
import region from '../fixture/region';
import restaurants from '../fixture/retaurants';

import {
  loadCategories,
  loadRegions,
  loadRestaurants,
  setCategories,
  setRegions,
  setRestaurants,
} from './actions';

import { fetchCategories, fetchRegions, fetchRestaurants } from './services/api';

jest.mock('./services/api');

const mockStore = configureStore([thunk]);

describe('loadRegions', () => {
  it('지역정보를 불러오고 dispatch를 실행하는 함수를 반환한다.', async () => {
    const store = mockStore({});
    fetchRegions.mockResolvedValue(region);

    await store.dispatch(loadRegions());

    const actions = store.getActions();
    expect(actions[0]).toStrictEqual(setRegions(region));
  });
});

describe('loadCategory', () => {
  it('음식 분류정보를 불러오고 dispatch를 실행하는 함수를 반환한다.', async () => {
    const store = mockStore({});
    fetchCategories.mockResolvedValue(category);

    await store.dispatch(loadCategories());

    const actions = store.getActions();
    expect(actions[0]).toStrictEqual(setCategories(category));
  });
});

describe('loadRestaurants', () => {
  it('음식점정보를 불러오고 dispatch를 실행하는 함수를 반환한다.', async () => {
    const store = mockStore({
      selectedRegion: { name: '서울' },
      selectedCategory: { id: 1 },
    });
    fetchRestaurants.mockResolvedValue(restaurants);

    await store.dispatch(loadRestaurants());

    const actions = store.getActions();
    expect(actions[0]).toStrictEqual(setRestaurants(restaurants));
  });
});
