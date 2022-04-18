export async function fetchLocations() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
  return data;
}

export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function fetchRestaurants() {
  const url = 'https://eatgo-customer-api.ahastudio.com/restaurants';
  // put region and categoryId ?region=${regionName}&category=${categoryId}
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
