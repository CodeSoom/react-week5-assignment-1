import {
  fetchCategories, fetchRegions, fetchRestaurants, setCategories, setRegions, setRestaurants,
} from './actions';

const fetchedRegions = [{ id: 1, name: '서울' }];
const fetchedCategories = [{ id: 1, name: '한식' }];
const fetchedRestaurants = [{ id: 1, name: '맛있는 식당' }];

jest.mock('../services/api/ApiService', () => jest.fn().mockImplementation(() => ({
  fetchRegions: () => fetchedRegions,
  fetchCategories: () => fetchedCategories,
  fetchRestaurants: () => fetchedRestaurants,
})));

describe('actions', () => {
  const dispatch = jest.fn();

  describe('fetchRegions', () => {
    it('callback calls dispatch', async () => {
      const callback = fetchRegions();

      await callback(dispatch, () => ({
        filter: {},
        regions: [],
        categories: [],
      }));

      expect(dispatch).toBeCalledWith(setRegions(fetchedRegions));
    });
  });

  describe('fetchCategories', () => {
    it('callback calls dispatch', async () => {
      const callback = fetchCategories();

      await callback(dispatch, () => ({
        filter: {},
        regions: [],
        categories: [],
      }));
      expect(dispatch).toBeCalledWith(setCategories(fetchedCategories));
    });
  });

  describe('fetchRestaurants', () => {
    it('callback calls dispatch', async () => {
      const callback = fetchRestaurants();

      await callback(dispatch, () => ({
        filter: {},
        regions: [],
        categories: [],
        restaurants: [],
      }));
      expect(dispatch).toBeCalledWith(setRestaurants(fetchedRestaurants));
    });
  });
});
