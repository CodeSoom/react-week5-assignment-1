const url = 'https://eatgo-customer-api.ahastudio.com/';

export async function fetchRegions() {
  try {
    const response = await fetch(`${url}regions`);
    const regions = await response.json();
    return regions;
  } catch (error) {
    return [];
  }
}

export async function fetchCategories() {
  try {
    const response = await fetch(`${url}categories`);
    const categories = await response.json();
    return categories;
  } catch (error) {
    return [];
  }
}

export async function fetchRestaurants(regionName, categoryId) {
  try {
    const response = await fetch(`${url}restaurants?region=${regionName}&category=${categoryId}`);
    const restaurants = await response.json();
    return restaurants;
  } catch (error) {
    return [];
  }
}
