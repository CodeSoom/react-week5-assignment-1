export const fetchRegions = async () => {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchCategories = async () => {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchRestaurants = async (region, category) => {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${region.name}&category=${category.id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
