import { fetchRegions } from './services/api';

export function setOptions(optionName, values) {
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
    dispatch(setOptions('regions', regions));
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

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}
