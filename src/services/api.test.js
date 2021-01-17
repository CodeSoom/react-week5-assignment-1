import {
  regions, categories, restaurants, selectedButtons,
} from '../../fixtures/fixture';
import { fetchRegions, fetchCategories, fetchRestaurants } from './api';

describe('api', () => {
  global.fetch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchRegions', () => {
    it('서버에서 regions 정보를 받습니다.', async () => {
      global.fetch.mockResolvedValue({
        json: () => (regions),
      });

      const data = await fetchRegions();
      expect(data).toEqual(regions);
    });
  });

  describe('fetchCategories', () => {
    it('서버에서 categories 정보를 받습니다.', async () => {
      global.fetch.mockResolvedValue({
        json: () => (categories),
      });

      const data = await fetchCategories();
      expect(data).toEqual(categories);
    });
  });

  describe('fetchRestaurants', () => {
    const { region, category } = selectedButtons;

    it('서버에서 restaurants 정보를 받습니다.', async () => {
      global.fetch.mockResolvedValue({
        json: () => (restaurants),
      });

      const data = await fetchRestaurants({ region, category });
      expect(data).toEqual(restaurants);
    });
  });
});
