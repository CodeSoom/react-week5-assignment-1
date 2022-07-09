export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
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

export function loadInitialData() {
  // Todo: loadInitialData 작성
//   return (dispatch) => {
//     dispatch(setRegions(regions));
//   };
}
