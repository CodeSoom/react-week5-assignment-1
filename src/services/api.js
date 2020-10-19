export async function fetchRestaurantRegion() {
  const response = await fetch('https://eatgo-customer-api.ahastudio.com/regions');
  const data = await response.json();
  return data;
}

// TODO: remove this fucntion!
export function xxx() { }
