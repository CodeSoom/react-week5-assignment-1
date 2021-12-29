const baseUrl = 'https://eatgo-customer-api.ahastudio.com';

export async function fetchRegions() {
  const response = await fetch(`${baseUrl}/regions`);
  const regions = await response.json();

  return regions;
}

export async function fetchCategories() {
  const response = await fetch(`${baseUrl}/categories`);
  const categories = await response.json();

  return categories;
}

export async function fetchRestaurants({ regionName, categoryId }) {
  const response = await fetch(`${baseUrl}/restaurants?region=${regionName}&category=${categoryId}`);
  const restaurants = await response.json();

  return restaurants;
}
