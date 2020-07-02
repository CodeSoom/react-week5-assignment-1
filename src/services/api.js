export default async function fetchRestaurantData(request) {
  const url = `https://eatgo-customer-api.ahastudio.com/${request}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
