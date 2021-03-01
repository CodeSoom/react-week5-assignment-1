export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function fetchRestaurants(regionName, categoryId) {
  if (regionName === undefined || categoryId === undefined) {
    return [];
  }

  const url = 'https://eatgo-customer-api.ahastudio.com/restaurants';
  const params = `?region=${regionName}&category=${categoryId}`;

  const response = await fetch(`${url}${params}`);
  const data = await response.json();

  return data;
}
