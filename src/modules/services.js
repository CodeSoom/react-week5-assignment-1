export const setFieldId = (state, action) => {
  const { name, value } = action.payload;

  return {
    ...state,
    [name]: value,
  };
};

export const setRegions = (state, action) => {
  const { regions } = action.payload;

  return {
    ...state,
    regions,
  };
};

export const setCategories = (state, action) => {
  const { categories } = action.payload;
  return {
    ...state,
    categories,
  };
};

export const setRestaurants = (state, action) => {
  const { restaurants } = action.payload;
  return {
    ...state,
    restaurants,
  };
};
