import regions from '../../../fixtures/regions';
import categories from '../../../fixtures/categories';
import restaurants from '../../../fixtures/restaurants';

export const fetchRegions = jest.fn(async () => regions);

export const fetchCategories = jest.fn(async () => categories);

export const fetchRestaurants = jest.fn(async () => restaurants);
