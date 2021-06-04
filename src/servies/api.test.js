import { fetchRegions, fetchCategories, fetchRestaurants } from './api';

jest.mock('./api');

describe('fetchCategories', () => {
  it('returns fetched categories', async () => {
    fetchCategories.mockImplementation(
      async () => [
        { id: 1, name: '한식' },
        { id: 2, name: '중식' },
        { id: 3, name: '일식' },
        { id: 4, name: '양식' },
        { id: 5, name: '분식' },
      ],
    );
    const data = await fetchCategories();

    expect(data).toBeArrayOfObjectWith('id', 'name');
  });
});

describe('fetchRegions', () => {
  it('returns fetched regions', async () => {
    fetchRegions.mockImplementation(
      async () => ['서울', '대전', '대구', '부산', '광주', '강원도'],
    );
    const data = await fetchRegions();

    expect(Array.isArray(data)).toBe(true);
  });
});

describe('fetchRestuarants', () => {
  beforeAll(() => {
    fetchRestaurants.mockImplementation(
      async (regionName, categoryId) => {
        if ([regionName, categoryId].includes(null)) {
          return [];
        }

        return ['양천주가', '한국식 초밥', '김초밥'];
      },
    );
  });

  context('when both category and region is selected', () => {
    it('returns fetched restuarants', async () => {
      const data = await fetchRestaurants('서울', 1);

      expect(Array.isArray(data)).toBe(true);
    });
  });

  context('when something is unselected', () => {
    it('returns empty array of restuarants', async () => {
      const data = await fetchRestaurants(null, 1);

      expect(data).toEqual([]);
    });
  });
});
