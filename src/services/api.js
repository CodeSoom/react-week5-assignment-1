const RegionListApi = 'https://eatgo-customer-api.ahastudio.com/regions';

const CategoryListApi = 'https://eatgo-customer-api.ahastudio.com/categories';

export async function fetchRegions() {
  const response = await fetch(RegionListApi);
  const data = await response.json();
  return data;
}

export async function fetchCategories() {
  const response = await fetch(CategoryListApi);
  const data = await response.json();
  return data;
}
