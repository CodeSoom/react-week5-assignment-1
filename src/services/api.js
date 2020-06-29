module.exports = {
  fetchRegions: async () => {
    const response = await fetch(
      'https://eatgo-customer-api.ahastudio.com/regions',
    );
    const data = await response.json();
    return data;
  },

  fetchCategories: async () => {
    const response = await fetch(
      'https://eatgo-customer-api.ahastudio.com/categories',
    );
    const data = await response.json();
    return data;
  },

  fetchRestaurants: async (regionName, categoryId) => {
    const response = await fetch(
      `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`,
    );
    const data = await response.json();
    return data;
  },
};
