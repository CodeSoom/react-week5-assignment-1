export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const respone = await fetch(url);
  const data = await respone.json();
  return data;
}

export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const respone = await fetch(url);
  const data = await respone.json();
  return data;
}

export async function fetchRestaurants(categoryId, regionName) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;
  const respone = await fetch(url);
  const data = await respone.json();
  return data;
}
