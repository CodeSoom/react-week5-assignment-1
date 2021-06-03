import { categories } from '../../../fixtures/categories';
import { regions } from '../../../fixtures/regions';
import { restaurants } from '../../../fixtures/restaurants';

export async function fetchRegions() {
  return regions;
}

export async function fetchCategories() {
  return categories;
}

export async function fetchRestaurants() {
  return restaurants;
}
