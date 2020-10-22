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

function setRegions({ state, payload }) {
  return {
    ...state,
    regions: payload.regions,
  };
}

const reducers = {
  selectRegion,
  setRegions,
};

export default function reducer(state = initialState, { type, payload }) {
  if (!reducers[type]) {
    return state;
  }

  return reducers[type]({ state, payload });
}
