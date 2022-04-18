import categories from '../../../fixture/categories';
import regions from '../../../fixture/regions';

export async function fetchCategories() {
  return categories;
}

export async function fetchRegions() {
  return regions;
}
