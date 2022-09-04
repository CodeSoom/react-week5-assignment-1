export async function fetchRestaurantInformations(information) {
  const url = `https://eatgo-customer-api.ahastudio.com/${information}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function fetchRestaurants({ regionName, categoryId }) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;
  const response = await fetch(url);
  const restaurants = await response.json();

  return restaurants;
}
