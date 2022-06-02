export const GET_CATEGORIES = 'https://eatgo-customer-api.ahastudio.com/categories';
export const GET_REGIONS = 'https://eatgo-customer-api.ahastudio.com/regions';
export const GET_RESTAURANTS = (region, category) => `https://eatgo-customer-api.ahastudio.com/restaurants?region=${region}&category=${category}`;
