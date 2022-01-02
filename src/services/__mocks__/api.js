import { regionsData, categoriesData } from '../../fixtures';

export function fetchRegions() {
  return regionsData;
}

export function fetchCategories() {
  return categoriesData;
}

export const fetchRestaurants = jest.fn();
