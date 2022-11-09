const URL = 'https://eatgo-customer-api.ahastudio.com';

export const fetchRegions = async () => {
  const response = await fetch(`${URL}/regions`);
  const data = await response.json();
  return data;
};

export const fetchCategories = async () => {
  const response = await fetch(`${URL}/categories`);
  const data = await response.json();
  return data;
};
