import BASE_URL from '../constants/api';

export async function fetchRegions() {
  const response = await fetch(`${BASE_URL}/regions`);
  const data = await response.json();

  return data;
}

export async function fetchCategories() {
  const response = await fetch(`${BASE_URL}/categories`);
  const data = await response.json();

  return data;
}

export async function fetchRestaurants({ regionName, categoryId }) {
  const response = await fetch(`${BASE_URL}/restaurants?region=${regionName}&category=${categoryId}`);
  const data = await response.json();

  return data;
}
