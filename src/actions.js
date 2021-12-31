import {
  fetchRestaurantRegions,
  fetchRestaurantCategories,
} from "./services/api";

export function setInitialState(regions, categories) {
  return {
    type: "SET_INITIAL_STATE",
    payload: { regions, categories },
  };
}

export function loadInitialState() {
  return async (dispatch) => {
    //fork 해줄수 있나?
    const regions = await fetchRestaurantRegions();
    const categories = await fetchRestaurantCategories();

    dispatch(setInitialState(regions, categories));
  };
}

export const changeRegion = (id) => {
  return {
    type: "CHANGE_REGION",
    payload: { id },
  };
};

export const changeCategory = (id) => {
  return {
    type: "CHANGE_CATEGORY",
    payload: { id },
  };
};
