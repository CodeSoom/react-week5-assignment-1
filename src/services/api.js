import { GET_CATEGORIES, GET_REGIONS, GET_RESTAURANTS } from '../lib/urls';

export async function fetchModule(url) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function fetchCategories() {
  const categories = await fetchModule(GET_CATEGORIES);
  return categories;
}

export async function fetchRegions() {
  const regions = await fetchModule(GET_REGIONS);
  return regions;
}

export async function fetchRestaurants(region = '', categoryId = 0) {
  const restaurants = await fetchModule(GET_RESTAURANTS(region, categoryId));
  return restaurants;
}
