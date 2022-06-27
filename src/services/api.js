import APIS from '../../constants/apis';

export async function fetchRegions() {
  const response = await fetch(APIS.REGIONS);
  const data = await response.json();

  return data;
}

export async function fetchCategories() {
  const response = await fetch(APIS.CATEGORIES);
  const data = await response.json();

  return data;
}

export async function fetchRestaurants(name, categoryId) {
  const response = await fetch(`${APIS.RESTAURANTS}?region=${name}&category=${categoryId}`);
  const data = await response.json();

  return data;
}
