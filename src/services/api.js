// jest에서 redux-mock-store 사용시 'fetch is not defined' 오류 때문에 import
import fetch from 'node-fetch';

const BASE_URL = 'https://eatgo-customer-api.ahastudio.com';

async function fetchRegions() {
  const url = '/regions';
  const response = await fetch(BASE_URL + url);
  const regions = await response.json();

  return regions;
}

async function fetchCategoryList() {
  const url = '/categories';
  const response = await fetch(BASE_URL + url);
  const categoryList = await response.json();

  return categoryList;
}

async function fetchRestaurants({ regionName, categoryId }) {
  const url = `${BASE_URL}/restaurants?region=${encodeURI(regionName)}&category=${categoryId}`;
  const response = await fetch(url);
  const categoryList = await response.json();

  return categoryList;
}

export {
  fetchRegions,
  fetchCategoryList,
  fetchRestaurants,
};
