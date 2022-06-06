import { GET_CATEGORIES, GET_REGIONS, GET_RESTAURANTS } from '../api/servicesApis';

export async function fetchCategories() {
  const categories = await fetch(GET_CATEGORIES);
  return categories.json();
}

export async function fetchRegions() {
  const regions = await fetch(GET_REGIONS);
  return regions.json();
}

export async function fetchRestaurants(category, regions) {
  const restaurants = await fetch(GET_RESTAURANTS(category, regions));
  return restaurants.json();
}

export default {};
