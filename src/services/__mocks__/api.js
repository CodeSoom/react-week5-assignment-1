import {
  regions,
  categories,
} from '../../../fixtures/staticData';

export async function fetchCategories() {
  return categories;
}

export async function fetchRegions() {
  return regions;
}
