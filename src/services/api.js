// REST - CRUD => Read - collection / member, element

// fetch GET /regions /regions/{id}
export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

// fetch GET /categoies /categoies/{id}
export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

// fetch GET /restaurants?region=${regionName}&category=${categoryId}
export async function fetchRestaurants(regionName, categoryId) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
