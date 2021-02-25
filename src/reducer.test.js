import {
  selectCategory,
  selectRegion,
} from './actions';
import reducer from './reducer';
import {
  regions as mockRegions,
  categories as mockCategories,
  restaurants as mockRestaurants,
} from './fixtures/mockData';

describe('reducer', () => {
  const initialState = {
    regions: [],
    categories: [],
    restaurants: [],
    error: { regions: null, categories: null, restaurants: null },
    watching: { regionName: null, categoryId: null },
  };
  describe('default state', () => {
    context('without action', () => {
      it('have default state', () => {
        const {
          regions, categories, restaurants, error,
        } = reducer();

        expect(regions).toHaveLength(0);
        expect(categories).toHaveLength(0);
        expect(restaurants).toHaveLength(0);
        expect(error.regions).toBeNull();
        expect(error.categories).toBeNull();
        expect(error.restaurants).toBeNull();
      });
    });

    context('with wrong action', () => {
      it('have default state', () => {
        const {
          regions, categories, restaurants, error,
        } = reducer(undefined, { type: '@@INIT' });

        expect(regions).toHaveLength(0);
        expect(categories).toHaveLength(0);
        expect(restaurants).toHaveLength(0);
        expect(error.regions).toBeNull();
        expect(error.categories).toBeNull();
        expect(error.restaurants).toBeNull();
      });
    });
  });
  describe('getRegions', () => {
    context('when getRegionsSuccess dispatched', () => {
      it('update state with regions', () => {
        const changedState = reducer(initialState,
          { type: 'getRegionsSuccess', payload: mockRegions });
        const { regions } = changedState;

        expect(regions).toHaveLength(6);

        const changedRegions = mockRegions.map((region) => ({ ...region, clicked: false }));

        changedRegions.forEach((region, index) => {
          expect(regions[index]).toMatchObject(region);
        });
      });
    });
    context('when getRegionsFailure dispatched', () => {
      it('update state with error', () => {
        const changedState = reducer(initialState,
          { type: 'getRegionsFailure', payload: new Error('getRegionsFailure') });
        const { regions } = changedState.error;

        expect(regions).toMatchObject(new Error('getRegionsFailure'));
      });
    });
  });

  describe('selectRegion', () => {
    it('update region state with region id', () => {
      const regionName = '울산';
      const changedState = reducer({ ...initialState, regions: mockRegions },
        selectRegion(regionName));
      const { regions, watching } = changedState;
      const changedRegion = regions.find((region) => region.name === regionName);

      expect(regions).toHaveLength(6);
      expect(changedRegion.clicked).toBe(true);
      expect(watching.regionName).toBe(regionName);
    });
  });

  describe('getCategories', () => {
    context('when getCategoriesSuccess dispatched', () => {
      it('update state with categories', () => {
        const changedState = reducer(initialState,
          { type: 'getCategoriesSuccess', payload: mockCategories });
        const { categories } = changedState;

        const changedCategories = mockCategories.map(
          (category) => ({ ...category, clicked: false }),
        );

        changedCategories.forEach((category, index) => {
          expect(categories[index]).toMatchObject(category);
        });
      });
    });
  });

  describe('selectCategory', () => {
    it('update category state with category id', () => {
      const changedState = reducer({ ...initialState, categories: mockCategories },
        selectCategory(1));
      const { categories, watching } = changedState;
      const changedCategory = categories.find((category) => category.id === 1);

      expect(categories).toHaveLength(mockCategories.length);
      expect(changedCategory.clicked).toBe(true);
      expect(watching.categoryId).toBe(1);
    });
  });

  describe('getRestaurants', () => {
    context('when getRestaurantsSuccess dispatched', () => {
      it('update state with restaurants', () => {
        const changedState = reducer(initialState,
          { type: 'getRestaurantsSuccess', payload: mockRestaurants });
        const { restaurants } = changedState;

        expect(restaurants).toHaveLength(mockRestaurants.length);
        mockRestaurants.forEach((restaurant, index) => {
          expect(restaurants[index]).toMatchObject(restaurant);
        });
      });
    });
  });
});
