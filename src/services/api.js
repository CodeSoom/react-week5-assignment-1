async function fetchData(url, options = {}) {
  const response = await fetch(url, options);
  const data = response.json();
  return data;
}

export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  return fetchData(url);
}

export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  return fetchData(url);
}

export async function fetchRestaurants(regionName, categoryId) {
  const url = 'https://eatgo-customer-api.ahastudio.com/restaurants';

  const queryParams = {
    region: regionName,
    category: categoryId,
  };

  return fetchData(url, queryParams);
}
