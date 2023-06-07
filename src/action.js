import { fetchRegions, fetchCategories, fetchRestaurants } from './services/api';

export function setRegions(data) {
  return {
    type: 'SET_REGIONS',
    payload: data,
  };
}

export function loadRegions() {
  return (async (dispatch) => {
    const data = await fetchRegions();
    await dispatch(setRegions(data));
  });
}

export function setCategories(data) {
  return {
    type: 'SET_CATEGORIES',
    payload: data,
  };
}

export function loadCategories() {
  return (
    async (dispatch) => {
      const data = await fetchCategories();
      await dispatch(setCategories(data));
    }
  );
}

export function setRestaurants(data) {
  return {
    type: 'SET_RESTAURANTS',
    payload: data,
  };
}

export function loadRestaurants({ selectedRegion, selectedCategory }) {
  const isEmptyObject = (object) => Object.keys(object || {}).length === 0;

  if (isEmptyObject(selectedRegion) || isEmptyObject(selectedCategory)) {
    return setRestaurants({ restaurantData: [{ id: 0, name: '불러온 레스토랑 목록이 없습니다.' }] });
  }

  return (
    async (dispatch) => {
      const data = await fetchRestaurants({
        regionName: selectedRegion.name,
        categoryId: selectedCategory.id,
      });
      await dispatch(setRestaurants(data));
    }
  );
}

export function setSelectedRegionAndCategory(selectedData) {
  return {
    type: 'SET_SELECTED_REGION_AND_CATEGORY',
    payload: selectedData,
  };
}
