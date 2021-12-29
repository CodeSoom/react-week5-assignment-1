import { fetchLoadLoaction } from './services/api';

export function setLocation(location) {
  return {
    type: 'setLocation',
    payload: {
      location,
    },
  };
}

export function setLocations(locations) {
  return {
    type: 'setLocations',
    payload: {
      locations,
    },
  };
}

export function loadLocations() {
  return async (dispatch) => {
    const loactions = await fetchLoadLoaction();
    dispatch(setLocations(loactions));
  };
}
