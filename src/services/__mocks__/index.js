export const fetchRegions = async () => [];

export const fetchCategories = async () => [];

export const fetchRestaurants = async ({ regionName, categoryId }) => {
  const response = await fetch(`https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`);

  return response.json();
};
