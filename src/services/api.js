async function fetchAddressList() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const addressList = await response.json();

  return addressList;
}

async function fetchCategoryList() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const categoryList = await response.json();

  return categoryList;
}

async function fetchRestaurants({ addressName, categoryId }) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${addressName}&category=${categoryId}`;
  const response = await fetch(url);
  const categoryList = await response.json();

  return categoryList;
}

export {
  fetchAddressList,
  fetchCategoryList,
  fetchRestaurants,
};
