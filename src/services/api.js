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

export async function fetchRestaurants({ selectedRegionName, selectedCategoryId }) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${selectedRegionName}&category=${selectedCategoryId}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}
