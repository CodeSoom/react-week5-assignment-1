export const loadInitialState = (regions, categories) => {
  return {
    type: "LOAD_INITIAL_STATE",
    payload: { regions, categories },
  };
};

export const changeRegion = (id) => {
  return {
    type: "CHANGE_REGION",
    payload: { id },
  };
};

export const changeCategory = (id) => {
  return {
    type: "CHANGE_CATEGORY",
    payload: { id },
  };
};
