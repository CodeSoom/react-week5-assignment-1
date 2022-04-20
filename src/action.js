import { fetchRegionList } from './services/api';

export function loadCategories() {
  return async (dispatch) => {
    // TODO : fetch
    const categories = [];
    dispatch(setCategories(categories));
  };
}

export function setRegionList(regionList) {
  return {
    type: 'setRegionList',
    payload: {
      regionList,
    },
  };
}
// todo : delete this
export function loadRegionList() {
  return async (dispatch) => {
    const regionList = await fetchRegionList();
    dispatch(setRegionList(regionList));
  };
}
