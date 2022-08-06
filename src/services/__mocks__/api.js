import {
  regions,
  categories,
  restaurants,
} from '../../../fixtures/staticData';

export const fetchRegions = jest.fn(async () => regions);
export const fetchCategories = jest.fn(async () => categories);
export const fetchRestaurants = jest.fn(async () => restaurants);
