export async function fetchLoadLocations() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchLoadCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchLoadRestaurants({ location, categoryId }) {
  console.log(location, categoryId);
  if (location === '' || categoryId === '') {
    return [];
  }

  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${location}&category=${categoryId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
