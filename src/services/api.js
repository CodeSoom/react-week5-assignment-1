export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const data = await fetch(url);
  const result = { regions: await data.json() };
  return result;
}

export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const data = await fetch(url);
  const result = { categories: await data.json() };
  return result;
}

export async function fetchRestaurants(regionName, categoryId) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;
  const data = await fetch(url);
  const result = { restaurants: await data.json() };
  return result;
}
