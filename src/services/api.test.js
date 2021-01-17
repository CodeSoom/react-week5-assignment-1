import { enableFetchMocks } from 'jest-fetch-mock';
import {
  fetchRestaurantRegion,
  fetchRestaurantCategories,
  fetchRestaurants,
} from './api';

describe('api', () => {
  enableFetchMocks();

  beforeEach(() => {
    fetch.resetMocks();
  });

  describe('fetchRestaurantRegion', () => {
    it('gets restaurant regions', async () => {
      // Given
      fetch.mockResponse(JSON.stringify({ data: [{ id: 1, name: '서울' }] }));

      // When
      const response = await fetchRestaurantRegion();

      // Then
      expect(response.data).toEqual([{ id: 1, name: '서울' }]);
    });
  });

  describe('fetchRestaurantCategories', () => {
    it('gets restaurant categories', async () => {
      // Given
      fetch.mockResponse(JSON.stringify({ data: [{ id: 1, name: '한식' }] }));

      // When
      const response = await fetchRestaurantCategories();

      // Then
      expect(response.data).toEqual([{ id: 1, name: '한식' }]);
    });
  });

  describe('fetchRestaurants', () => {
    it('gets restaurants selected by region and category ', async () => {
      // Given
      const regionName = '서울';
      const categoryId = 1;

      fetch.mockResponse(JSON.stringify({
        data: [{
          id: 1,
          categoryId: 1,
          name: '양천주가',
          address: '서울 강남구 123456',
          information: '양천주가 in 서울 강남구 123456',
        }],
      }));

      // When
      const response = await fetchRestaurants({ regionName, categoryId });

      // Then
      expect(response.data).toEqual([{
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구 123456',
        information: '양천주가 in 서울 강남구 123456',
      }]);
    });
  });
});
