export async function fetchAddressList() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const addressList = await response.json();

  return addressList;
}

export async function fetchCategoryList() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const categoryList = await response.json();

  return categoryList;
}
