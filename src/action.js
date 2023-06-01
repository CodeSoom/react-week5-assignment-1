import { regionData } from './services/api';

export function setRegionData(data) {
  return {
    type: 'SET_REGION_DATA',
    payload: data,
  };
}

export function fetchRegion() {
  return (async (dispatch) => {
    const data = await regionData();
    await dispatch(setRegionData(data));
  });
}

export function updateSelectedData(selectedRegion) {
  return {
    type: 'UPDATE_SELECTED_DATA',
    payload: selectedRegion,
  };
}
