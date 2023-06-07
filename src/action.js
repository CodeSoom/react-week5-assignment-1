import { fetchRegions, fetchCategories, fetchRestaurants } from './services/api';

export function setRegionData(data) {
  return {
    type: 'SET_REGION_DATA',
    payload: data,
  };
}

export function fetchRegion() {
  return (async (dispatch) => {
    const data = await fetchRegions();
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
      const data = await fetchCategories();
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
  const isEmptyObject = (object) => Object.keys(object || {}).length === 0;

  if (isEmptyObject(selectedRegion) || isEmptyObject(selectedCategory)) {
    return setRestaurantData({ restaurantData: [{ id: 0, name: '불러온 레스토랑 목록이 없습니다.' }] });
  }

  return (
    async (dispatch) => {
      const data = await fetchRestaurants({
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
