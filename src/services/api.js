const fetchRegions = async () => {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const fetchedRegions = await response.json();

  return fetchedRegions;
};

const fetchCategories = async () => {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const fetchedCategories = await response.json();

  return fetchedCategories;
};

const fetchRestaurants = async ({ regionName, categoryId }) => {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;
  const response = await fetch(url);
  const fetchedRestaurants = await response.json();

  return fetchedRestaurants;
};

export { fetchRegions, fetchCategories, fetchRestaurants };
