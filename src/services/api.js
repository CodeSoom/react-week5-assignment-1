async function fetchData(url) {
  const data = await fetch(url);

  return data.json();
}

export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';

  return fetchData(url);
}

export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';

  return fetchData(url);
}

export async function fetchRestaurants({ regionName, categoryId }) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;

  return fetchData(url);
}
