import {
  regions,
  categories,
  restaurants,
} from '../../../fixtures/staticData';

export async function fetchCategories() {
  return categories;
}

export async function fetchRegions() {
  return regions;
}

export async function fetchRestaurants() {
  return restaurants;
}
