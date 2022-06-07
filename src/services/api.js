export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRestaurants({ regionName, categorieId }) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categorieId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
