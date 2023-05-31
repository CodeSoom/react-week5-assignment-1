import { regionData } from './services/fetchData';

export function setRegionData(data) {
  return {
    type: 'SET_REGION_DATA',
    payload: { regionData: data },
  };
}

export function fetchRegion() {
  return (async (dispatch) => {
    const data = await regionData();
    await dispatch(setRegionData(data));
  });
}
