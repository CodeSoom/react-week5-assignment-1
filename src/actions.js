export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function loadInitialData() {
  return (dispatch) => {
    dispatch(setRegions(regions));
    dispatch(setCategories(categories));
  };
}

// TODO: delete this!
export function xxx() {
  return {};
}
