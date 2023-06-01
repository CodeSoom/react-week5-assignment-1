import { regionData, categoryData } from './services/api';

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

export function setCategoryData(data) {
  return {
    type: 'SET_CATEGORY_DATA',
    payload: data,
  };
}

export function fetchCategory() {
  return (
    async (dispatch) => {
      const data = await categoryData();
      console.log('Categories', data);
      await dispatch(setCategoryData(data));
    }
  );
}

export function updateSelectedData(selectedData) {
  return {
    type: 'UPDATE_SELECTED_DATA',
    payload: selectedData,
  };
}
