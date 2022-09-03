import reducer from './reducer';

import {
  setButtonData,
} from './actions';

import fixtureRegions from '../fixtures/regions';
import fixtureCategories from '../fixtures/categories';
import fixtureRestaurants from '../fixtures/restaurants';

describe('reducer', () => {
  it('returns initial state in the begining', () => {
    const {
      regions, categories, restaurants, filter: { regionName, categoryId },
    } = reducer(undefined, {});

    expect(regions).toHaveLength(0);
    expect(categories).toHaveLength(0);
    expect(restaurants).toHaveLength(0);
    expect(regionName).toBeNull();
    expect(categoryId).toBeNull();
  });

  it('returns receved state as is with unspecified action type', () => {
    const settingState = {
      regions: fixtureRegions,
      categories: fixtureCategories,
      restaurants: fixtureRestaurants,
      filter: {
        regionName: fixtureRegions[0].name,
        categoryId: fixtureCategories[0].id,
      },
    };

    const {
      regions, categories, restaurants, filter: { regionName, categoryId },
    } = reducer(settingState, {});

    regions.forEach((region, index) => {
      expect(region.id).toBe(fixtureRegions[index].id);
      expect(region.name).toBe(fixtureRegions[index].name);
    });

    categories.forEach((category, index) => {
      expect(category.id).toBe(fixtureCategories[index].id);
      expect(category.name).toBe(fixtureCategories[index].name);
    });

    restaurants.forEach((restaurant, index) => {
      expect(restaurant.id).toBe(fixtureRestaurants[index].id);
      expect(restaurant.name).toBe(fixtureRestaurants[index].name);
    });

    expect(regionName).toBe(fixtureRegions[0].name);
    expect(categoryId).toBe(fixtureCategories[0].id);
  });

  describe('setButtonData', () => {
    it('changes regions', () => {
      const { regions } = reducer({
        regions: [],
      }, setButtonData({
        sort: 'regions',
        data: fixtureRegions,
      }));

      expect(regions).not.toHaveLength(0);
    });

    it('changes categories', () => {
      const { categories } = reducer({
        categories: [],
      }, setButtonData({
        sort: 'categories',
        data: fixtureCategories,
      }));

      expect(categories).not.toHaveLength(0);
    });
  });
});
