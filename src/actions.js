import {
  fetchRegions,
  fetchCategories,
} from './services/api';

export function setOptions({ optionName, values }) {
  return {
    type: 'setOptions',
    payload: {
      optionName,
      values,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setOptions({ optionName: 'regions', values: regions }));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setOptions({ optionName: 'categories', values: categories }));
  };
}

export function selectOption(option, id) {
  return {
    type: 'selectOption',
    payload: {
      option,
      id,
    },
  };
}
