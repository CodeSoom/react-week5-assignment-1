export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function loadInitialData() {
  return (dispatch) => {
    dispatch(setRegions(regions));
    //   dispatch(setCategories(categories));
  };
}

export function te() {}
