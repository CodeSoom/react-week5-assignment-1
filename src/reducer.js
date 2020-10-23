const initialState = {
  selectedRegion: -1,
  selectedCategory: -1,
  regions: [],
  categories: [],
  restaurants: [],
};

function selectRegion({ state, payload }) {
  return {
    ...state,
    selectedRegion: payload.id,
  };
}

function selectCategory({ state, payload }) {
  return {
    ...state,
    selectedCategory: payload.id,
  };
}

function setRegions({ state, payload }) {
  return {
    ...state,
    regions: payload.regions,
  };
}

function setCategories({ state, payload }) {
  return {
    ...state,
    categories: payload.categories,
  };
}

const reducers = {
  selectRegion,
  selectCategory,
  setRegions,
  setCategories,
};

export default function reducer(state = initialState, { type, payload }) {
  if (!reducers[type]) {
    return state;
  }

  return reducers[type]({ state, payload });
}
