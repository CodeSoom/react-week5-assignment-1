const DOMAIN = 'https://eatgo-customer-api.ahastudio.com';

const fetchRegions = async () => {
  const url = `${DOMAIN}/regions`;
  const response = await fetch(url);

  return response.json();
};

const fetchCategories = async () => {
  const url = `${DOMAIN}/categories`;
  const response = await fetch(url);

  return response.json();
};

const fetchRestaurants = async (regionName, categoryId) => {
  const url = `${DOMAIN}/restaurants?region=${regionName}&category=${categoryId}`;
  const response = await fetch(url);

  return response.json();
};

export {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
};
