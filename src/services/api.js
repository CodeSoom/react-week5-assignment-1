async function get(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export function fetchRegions() {
  return get('https://eatgo-customer-api.ahastudio.com/regions');
}

export function fetchCategories() {
  return get('https://eatgo-customer-api.ahastudio.com/categories');
}

export function fetchRestaurants({ regionName, categoryId }) {
  return get(`https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`);
}
