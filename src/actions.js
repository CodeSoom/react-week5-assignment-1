import { fetchRegions, fetchFoods } from "./services/api";

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function loadRegions () {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}

export function setFoods(foods) {
  return {
    type: 'setFoods',
    payload: { 
      foods 
    },
  };
} 

export function loadFoods () {
  return async (dispatch) => {
    const foods = await fetchFoods();
    dispatch(setFoods(foods));
  };
}