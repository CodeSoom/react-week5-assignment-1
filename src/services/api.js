export async function fetchRegions() {
  const res = await fetch('https://eatgo-customer-api.ahastudio.com/regions');
  const regions = await res.json();

  return regions;
}

export async function fetchCategories() {
  const res = await fetch('https://eatgo-customer-api.ahastudio.com/categories');
  const categories = await res.json();

  return categories;
}

export async function fetchRestaurants({ regionId, categoryId }) {
  const res = await fetch(`https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionId}&category=${categoryId}`);
  const restaurants = await res.json();

  return restaurants;
}
