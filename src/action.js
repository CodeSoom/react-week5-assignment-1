import { regionData, categoryData, restaurantData } from './services/api';

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
      await dispatch(setCategoryData(data));
    }
  );
}

export function setRestaurantData(data) {
  return {
    type: 'SET_RESTAURANT_DATA',
    payload: data,
  };
}

export function fetchRestaurant({ selectedRegion, selectedCategory }) {
  return (
    async (dispatch) => {
      const data = await restaurantData({
        regionName: selectedRegion.name,
        categoryId: selectedCategory.id,
      });
      await dispatch(setRestaurantData(data));
    }
  );
}

export function updateSelectedData(selectedData) {
  return {
    type: 'UPDATE_SELECTED_DATA',
    payload: selectedData,
  };
}
