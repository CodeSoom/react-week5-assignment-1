// eslint-disable-next-line import/prefer-default-export
export async function fetchRestaurants(regionName, categoryId) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;
  const response = await fetch(url);
  const restaurants = await response.json();
  return restaurants;
}
