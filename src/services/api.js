const fetchApi = async (api) => {
  const response = await fetch(`https://eatgo-customer-api.ahastudio.com${api}`);
  const data = await response.json();
  return data;
};

export const fetchRegions = async () => fetchApi('/regions');

export const fetchCategories = async () => fetchApi('/categories');

export const fetchRestaurants = async (region, category) => fetchApi(`/restaurants?region=${region.name}&category=${category.id}`);
