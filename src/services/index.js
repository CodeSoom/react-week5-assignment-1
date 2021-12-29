export const fetchRegions = async () => {
  const response = await fetch('https://eatgo-customer-api.ahastudio.com/regions');

  return response.json();
};

export const fetchCategories = async () => {
  const response = await fetch('https://eatgo-customer-api.ahastudio.com/categories');

  return response.json();
};

export const fetchRestaurants = async ({ regionName, categoryId }) => {
  const response = await fetch(`https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`);

  return response.json();
};
