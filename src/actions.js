import fetchLocations from './services/api';

export function updateSelectedLocation(selectedlocationname) {
  return {
    type: 'updateSelectedLocation',
    payload: { selectedlocationname },
  };
}

export function updateSelectedCategory(selectedcategoryname) {
  return {
    type: 'updateSelectedCategory',
    payload: { selectedcategoryname },
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
