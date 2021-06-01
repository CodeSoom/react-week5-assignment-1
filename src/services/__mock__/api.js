import { categories } from '../../../fixtures/categories';
import { regions } from '../../../fixtures/regions';

export async function fetchRegions() {
  return regions;
}

export async function fetchCategories() {
  return categories;
}
