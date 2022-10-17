export async function fetchRegions() {
  const RegionListApi = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(RegionListApi);
  const data = await response.json();
  return data;
}

export async function fetchCategories() {
  const CategoryListApi = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(CategoryListApi);
  const data = await response.json();
  return data;
}

export async function fetchRestaurants(regionName, categoryId) {
  const RestaurntApi = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;
  const response = await fetch(RestaurntApi);
  const data = await response.json();

  return data;
}
