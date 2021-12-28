import { GET_CATEGORIES, GET_REGIONS, GET_RESTAURANTS } from '../urls';

export async function fetchCategories() {
  const categories = await fetch(GET_CATEGORIES);
  return categories.json();
}

export async function fetchRegions() {
  const regions = await fetch(GET_REGIONS);
  return regions.json();
}

export async function fetchRestaurants(region, category) {
  const restaurants = await fetch(GET_RESTAURANTS(region, category));
  return restaurants.json();
}
