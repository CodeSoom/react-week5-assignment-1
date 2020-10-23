import { fetchOptions, fetchRestaurants } from './api';

describe('api', () => {
  describe('fetchRegion', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([
        { id: 1, name: '서울' },
        { id: 2, name: '대전' },
        { id: 3, name: '대구' },
      ]),
    }));

    beforeEach(() => {
      global.fetch.mockClear();
    });

    it('get regions from server', async () => {
      const regions = await fetchOptions({ optionName: 'regions' });
      expect(regions.length).toBeGreaterThan(1);
    });
  });

  describe('fetchCategories', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([
        { id: 1, name: '한식' },
        { id: 2, name: '중식' },
        { id: 3, name: '일식' },
      ]),
    }));

    beforeEach(() => {
      global.fetch.mockClear();
    });

    it('get categories from server', async () => {
      const categories = await fetchOptions({ optionName: 'categories' });
      expect(categories.length).toBeGreaterThan(1);
    });
  });

  describe('fetchRestaurants', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([
        {
          id: 1, categoryId: 1, name: '양천주가', address: '서울 강남구 123456', information: '양천주가 in 서울 강남구 123456',
        },
        {
          id: 6, categoryId: 1, name: '한국식 초밥', address: '서울 강남구', information: '한국식 초밥 in 서울 강남구',
        },
        {
          id: 14, categoryId: 1, name: '김초밥', address: '서울시 강남구 역삼동', information: '김초밥 in 서울시 강남구 역삼동',
        },
      ]),
    }));

    beforeEach(() => {
      global.fetch.mockClear();
    });

    it('get categories from server', async () => {
      const restaurants = await fetchRestaurants({ region: '서울', categoryId: 1 });
      expect(restaurants.length).toBeGreaterThan(1);
    });
  });
});
