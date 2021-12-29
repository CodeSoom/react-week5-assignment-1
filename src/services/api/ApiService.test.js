import ApiService from './ApiService';

describe('ApiService', () => {
  const host = 'https://test.com';
  const logger = { error: jest.fn() };
  const apiService = new ApiService(host, logger);

  context('with api success', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({}),
    }));

    beforeEach(() => {
      global.fetch.mockClear();
    });

    it('calls fetch in fetchRegions', () => {
      apiService.fetchRegions();

      expect(fetch).toBeCalledWith(`${host}/regions`);
    });

    it('calls fetch in fetchCategories', () => {
      apiService.fetchCategories();

      expect(fetch).toBeCalledWith(`${host}/categories`);
    });

    it('calls fetch in fetchRestaurants', () => {
      const regionId = 1;
      const categoryId = 2;
      apiService.fetchRestaurants(regionId, categoryId);

      expect(fetch).toBeCalledWith(`${host}/restaurants?region=${regionId}&category=${categoryId}`);
    });
  });

  context('with api error', () => {
    const error = new Error('test error');
    beforeEach(() => {
      global.fetch = () => {
        throw error;
      };
    });

    it('calls logger.error in fetchRegions', () => {
      apiService.fetchRegions();

      expect(logger.error).toBeCalledWith(error);
    });

    it('calls logger.error in fetchCategories', () => {
      apiService.fetchCategories();

      expect(logger.error).toBeCalledWith(error);
    });

    it('calls logger.error in fetchRestaurants', () => {
      const regionId = 1;
      const categoryId = 2;
      apiService.fetchRestaurants(regionId, categoryId);

      expect(logger.error).toBeCalledWith(error);
    });
  });
});
