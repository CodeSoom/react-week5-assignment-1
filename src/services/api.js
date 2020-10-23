import axios from 'axios';

export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await axios.get(url);
  return response.data;
}

export async function fetchCategories() {
  return [];
}

export async function fetchRestaurants() {
  return [];
}
