export const loadCategories = async () => {
  try {
    const url = 'https://eatgo-customer-api.ahastudio.com/categories';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

export const loadRegions = async () => {
  try {
    const url = 'https://eatgo-customer-api.ahastudio.com/regions';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

export const loadRestaurants = async ({ regionName, categoryId }) => {
  try {
    const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};
