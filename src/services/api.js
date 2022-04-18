export async function fetchCategories() {
  const data = await fetch('https://eatgo-customer-api.ahastudio.com/categories');
  const categories = await data.json();

  return categories;
}

export async function fetchRegions() {
  const data = await fetch('https://eatgo-customer-api.ahastudio.com/regions');
  const regions = await data.json();

  return regions;
}
