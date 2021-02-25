export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const data = response.json();

  return data;
}

export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const data = response.json();

  return data;
}

export async function fetchRestaurants({ region, category }) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${region}&category=${category}`;
  const response = await fetch(url);
  const data = response.json();

  return data;
}
