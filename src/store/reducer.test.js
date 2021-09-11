import configureMockStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import reducer, {
  updateField, loadCategories, loadRegions, loadRestaurants,
} from './reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../services/api');

describe('reducer', () => {
  describe('updateField', () => {
    it('updates store field', () => {
      const previousState = {
        categories: [],
      };

      const categoriesData = [
        { id: 1, name: '한식' },
        { id: 2, name: '중식' },
      ];

      const nextState = reducer(
        previousState,
        updateField({
          field: 'categories',
          value: categoriesData,
        }),
      );

      expect(nextState.categories).toBe(categoriesData);
    });
  });

  describe('loadCategories', () => {
    it('dispatches updateField action', async () => {
      const expectedAction = [updateField({
        field: 'categories',
        value: [
          { id: 1, name: '한식' },
          { id: 2, name: '중식' },
          { id: 3, name: '일식' },
        ],
      })];

      const store = mockStore({
        categories: [
          { id: 1, name: '한식' },
          { id: 2, name: '중식' },
          { id: 3, name: '일식' },
        ],
      });

      await store.dispatch(loadCategories());

      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  describe('loadRegions', () => {
    it('dispatches updateField action', async () => {
      const expectedAction = [updateField({
        field: 'regions',
        value: [
          { id: 1, name: '서울' },
          { id: 2, name: '대전' },
          { id: 3, name: '대구' },
        ],
      })];

      const store = mockStore({
        regions: [
          { id: 1, name: '서울' },
          { id: 2, name: '대전' },
          { id: 3, name: '대구' },
        ],
      });

      await store.dispatch(loadRegions());

      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  describe('loadRestaurants', () => {
    it('dispatches updateField action', async () => {
      const expectedAction = [updateField({
        field: 'restaurants',
        value: [{
          id: 1,
          categoryId: 1,
          name: '양천주가',
          address: '서울 강남구 123456',
          information: '양천주가 in 서울 강남구 123456',
        },
        {
          id: 6,
          categoryId: 1,
          name: '한국식초밥',
          address: '서울 강남구',
          information: '한국식 초밥 in 서울 강남구',
        }],
      })];

      const store = mockStore({
        selectedCategory: { id: 1, name: '한식' },
        selectedRegion: { id: 1, name: '서울' },
        restaurants: [{
          id: 1,
          categoryId: 1,
          name: '양천주가',
          address: '서울 강남구 123456',
          information: '양천주가 in 서울 강남구 123456',
        },
        {
          id: 6,
          categoryId: 1,
          name: '한국식초밥',
          address: '서울 강남구',
          information: '한국식 초밥 in 서울 강남구',
        }],
      });

      await store.dispatch(loadRestaurants());

      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
