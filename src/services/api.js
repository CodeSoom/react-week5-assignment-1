const url = 'https://eatgo-customer-api.ahastudio.com/';

export async function fetchRegions() {
  const response = await fetch(`${url}regions`);
  const regions = await response.json();
  return regions;
}

export async function fetchCategories() {
  const response = await fetch(`${url}categories`);
  const categories = await response.json();
  return categories;
}

export async function fetchRestaurants(regionName, categoryId) {
  const response = await fetch(`${url}restaurants?region=${regionName}&category=${categoryId}`);
  const restaurants = await response.json();
  return restaurants;
}
