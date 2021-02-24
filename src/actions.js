import fetchLocations from './services/api';

export function updateSelectedLocation(locationName) {
  return {
    type: 'updateSelectedLocation',
    payload: { locationName },
  };
}

export function updateSelectedCategory(categoryName) {
  return {
    type: 'updateSelectedCategory',
    payload: { categoryName },
  };
}

export function setLocations(locations) {
  return {
    type: 'setLocations',
    payload: { locations },
  };
}

export function loadLocations() {
  return async (dispatch) => {
    const locations = await fetchLocations();
    dispatch(setLocations(locations));
  };
}
