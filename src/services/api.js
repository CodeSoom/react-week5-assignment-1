export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const categories = await response.json();

  return categories;
}

export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const regions = await response.json();

  return regions;
}

export async function fetchRestaurants({ regionName, categoryId }) {
  if (regionName && categoryId) {
    const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;
    const response = await fetch(url);
    const restaurants = await response.json();

    return restaurants;
  }
  return [];
}
