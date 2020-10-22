const initialState = {
  checkedRegion: -1,
  checkedCategory: -1,
  regions: [],
  categories: [],
  restaurants: [],
};

function checkRegion({ state, payload }) {
  return {
    ...state,
    checkedRegion: payload.id,
  };
}

function setRegions({ state, payload }) {
  return {
    ...state,
    regions: payload.regions,
  };
}

const reducers = {
  checkRegion,
  setRegions,
};

export default function reducer(state = initialState, { type, payload }) {
  if (!reducers[type]) {
    return state;
  }

  return reducers[type]({ state, payload });
}
