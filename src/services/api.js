async function fetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export function fetchRestaurantRegion() {
  return fetcher('https://eatgo-customer-api.ahastudio.com/regions');
}

export function fetchRestaurantCategories() {
  return fetcher('https://eatgo-customer-api.ahastudio.com/categories');
}

export function fetchRestaurants({ regionName, categoryId }) {
  return fetcher(`https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`);
}
