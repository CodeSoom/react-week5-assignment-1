export async function fetchRestaurants(region, category) {
  const url = 'https://eatgo-customer-api.ahastudio.com/restaurants';

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export function xxx() {

}
