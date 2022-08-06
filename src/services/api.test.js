import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from './api';

describe('api', () => {
  beforeEach(() => jest.clearAllMocks());

  context('with fetchCategories', () => {
    it('fetches categories', async () => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve([{ id: 1, name: '한식' }]),
      }));

      const categories = await fetchCategories();

      expect(categories).toEqual([{ id: 1, name: '한식' }]);
      expect(fetch).toHaveBeenCalled();
    });
  });

  context('with fetchRegions', () => {
    it('fetches regions', async () => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve([{ id: 1, name: '서울' }]),
      }));

      const regions = await fetchRegions();

      expect(regions).toEqual([{ id: 1, name: '서울' }]);
      expect(fetch).toHaveBeenCalled();
    });
  });

  context('with fetchRestaurants', () => {
    context('with proper params', () => {
      it('fetches restaurants', async () => {
        global.fetch = jest.fn(() => Promise.resolve({
          json: () => Promise.resolve([{
            id: 1,
            categoryId: 1,
            name: '한국식 초밥',
            address: '서울 강남구',
            information: '한국식 초밥 in 서울 강남구',
          },
          ]),
        }));

        const regions = await fetchRestaurants({ regionName: '서울', categoryId: 1 });

        expect(regions).toEqual([{
          id: 1,
          categoryId: 1,
          name: '한국식 초밥',
          address: '서울 강남구',
          information: '한국식 초밥 in 서울 강남구',
        },
        ]);
        expect(fetch).toHaveBeenCalled();
      });
    });

    context('without proper params', () => {
      it('does nothing', async () => {
        global.fetch = jest.fn(() => Promise.resolve({
          json: () => Promise.resolve([{
            id: 1,
            categoryId: 1,
            name: '한국식 초밥',
            address: '서울 강남구',
            information: '한국식 초밥 in 서울 강남구',
          },
          ]),
        }));

        const regions = await fetchRestaurants({ regionName: '', categoryId: '' });

        expect(regions).toEqual([]);
        expect(fetch).not.toHaveBeenCalled();
      });
    });
  });
});
