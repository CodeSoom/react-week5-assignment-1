import regions from '../../../fixtures/regions';
import categories from '../../../fixtures/categories';

export async function fetchRegions() {
  return regions;
}

export async function fetchCategories() {
  return categories;
}
