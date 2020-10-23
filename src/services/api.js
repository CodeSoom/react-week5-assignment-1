export async function fetchOptions({ optionName }) {
  const url = `https://eatgo-customer-api.ahastudio.com/${optionName}`;
  const response = await fetch(url);
  const data = response.json();

  return data;
}

export async function fetchRestaurants({ region, categoryId }) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${region}&category=${categoryId}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
}
