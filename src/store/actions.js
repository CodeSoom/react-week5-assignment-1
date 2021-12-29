export const CHANGE_REGION = 'changeRegion';
export const CHANGE_CATEGORY = 'changeCategory';
export const SET_REGIONS = 'setRegions';
export const SET_CATEGORIES = 'setCategories';
export const SET_RESTAURANTS = 'setRestaurants';

export function changeRegion(regionName) {
  return {
    type: CHANGE_REGION,
    payload: {
      regionName,
    },
  };
}

export function changeCategory(categoryId) {
  return {
    type: CHANGE_CATEGORY,
    payload: {
      categoryId,
    },
  };
}

export function setRegions(regions) {
  return {
    type: SET_REGIONS,
    payload: {
      regions,
    },
  };
}

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: {
      categories,
    },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: SET_RESTAURANTS,
    payload: {
      restaurants,
    },
  };
}
