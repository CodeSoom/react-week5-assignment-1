import {
  fetchRegions,
  fetchCategories,
  fetchSelected
} from "./api";

import regions from '../../fixtures/regions';
import categories from "../../fixtures/categories";
import restaurants from "../../fixtures/restaurants";

describe('api', () => {
  describe('fetchRegions', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(regions),
      }));
    });

    it('지역 데이터를 반환한다.', async () => {
      const regionLists = await fetchRegions();

      expect(regionLists).toEqual(regions);
    });
  });

  describe('fetchCategories', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(categories),
      }));
    });

    it('카테고리 데이터를 반환한다.', async () => {
      const categoryLists = await fetchCategories();

      expect(categoryLists).toEqual(categories);
    });
  });

  describe('fetchSelected', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(restaurants),
      }));
    });

    it('레스토랑 목록을 반환한다.', async () => {
      const restaurantLists = await fetchSelected();

      expect(restaurantLists).toEqual(restaurants);
    })
  });
});
