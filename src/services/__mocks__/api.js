import categories from '../../../fixture/categories';
import regions from '../../../fixture/regions';
import restaurants from '../../../fixture/restaurants';

export async function fetchCategories() {
  return categories;
}

export async function fetchRegions() {
  return regions;
}

export async function fetchRestaurants({ regionName, categoryId }) {
  if (!regionName || !categoryId) {
    return [];
  }

  return restaurants;
}
