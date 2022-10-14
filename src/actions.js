// import { fetchCategories } from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function setStores(stores) {
  return {
    type: 'setStores',
    payload: {
      stores,
    },
  };
}

// export function loadRestaurants() {
//   return async (dispatch) => {
//     const restaurants = [];
//     dispatch(setRestaurants(restaurants));
//   };
// }
//
// export function loadCategories() {
//   return async (dispatch) => {
//     // TODO..
//     const categories = await fetchCategories();
//     dispatch(setCategories(categories));
//   };
// }
//
// export function xxx() {
// //
// }
