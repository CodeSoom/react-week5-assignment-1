import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

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

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('loadRegions', () => {
  it('지역정보를 불러오고 dispatch를 실행하는 함수를 반환한다.', async () => {
    const store = mockStore({});
    fetchRegions.mockResolvedValue([
      { id: 1, name: '서울' },
      { id: 2, name: '부산' },
    ]);

    await store.dispatch(loadRegions());
    const actions = store.getActions();
    expect(actions[0]).toStrictEqual(setRegions([
      { id: 1, name: '서울' },
      { id: 2, name: '부산' },
    ]));
  });
});

describe('loadCategory', () => {
  it('음식 분류정보를 불러오고 dispatch를 실행하는 함수를 반환한다.', async () => {
    const store = mockStore({});
    fetchCategories.mockResolvedValue([
      { id: 1, name: '한식' },
      { id: 2, name: '중식' },
    ]);

    await store.dispatch(loadCategories());
    const actions = store.getActions();
    expect(actions[0]).toStrictEqual(setCategories([
      { id: 1, name: '한식' },
      { id: 2, name: '중식' },
    ]));
  });
});

describe('loadRestaurants', () => {
  it('음식점정보를 불러오고 dispatch를 실행하는 함수를 반환한다.', async () => {
    const store = mockStore({});
    fetchRestaurants.mockResolvedValue([
      {
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구 123456',
        information: '양천주가 in 서울 강남구 123456',
      },
      {
        id: 6,
        categoryId: 1,
        name: '한국식 초밥',
        address: '서울 강남구',
        information: '한국식 초밥 in 서울 강남구',
      },
    ]);

    await store.dispatch(loadRestaurants());
    const actions = store.getActions();
    expect(actions[0]).toStrictEqual(setRestaurants([
      {
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구 123456',
        information: '양천주가 in 서울 강남구 123456',
      },
      {
        id: 6,
        categoryId: 1,
        name: '한국식 초밥',
        address: '서울 강남구',
        information: '한국식 초밥 in 서울 강남구',
      },
    ]));
  });
});
