import regions from '../../__fixture__/regions';
import categories from '../../__fixture__/categories';

export async function fetchRegions() {
  return regions;
}

export async function fetchCategories() {
  return categories;
}

export async function fetchRestaurants() {
  return [];
}
