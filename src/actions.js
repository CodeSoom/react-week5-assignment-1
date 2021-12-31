import {
  fetchRestaurantRegions,
  fetchRestaurantCategories,
  fetchRestaurants,
} from "../services/api";

export function setInitialState(regions, categories) {
  return {
    type: "SET_INITIAL_STATE",
    payload: { regions, categories },
  };
}

export function loadInitialState() {
  return async (dispatch) => {
    // fork 해줄수 있나?
    const regions = await fetchRestaurantRegions();
    const categories = await fetchRestaurantCategories();

    dispatch(setInitialState(regions, categories));
  };
}

export const changeRegion = (id) => ({
  type: "CHANGE_REGION",
  payload: { id },
});

export const changeCategory = (id) => ({
  type: "CHANGE_CATEGORY",
  payload: { id },
});

export const setRestaurants = (restaurants) => ({
  type: "SET_RESTAURANTS",
  payload: { restaurants },
});

export const getRestaurants = (regionName, categoryId) => async (dispatch) => {
  const restaurants = await fetchRestaurants(regionName, categoryId);

  dispatch(setRestaurants(restaurants));
};
