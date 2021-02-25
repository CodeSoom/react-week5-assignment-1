// import { fetchRestaurants } from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function regionSelect(regionName) {
  return {
    type: 'regionSelect',
    payload: {
      regionName,
    },
  };
}

export function categorySelect(id) {
  return {
    type: 'categorySelect',
    payload: {
      categoryId: id,
    },
  };
}
