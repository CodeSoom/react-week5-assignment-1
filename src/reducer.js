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

const reducers = {
  checkRegion,
};

export default function reducer(state = initialState, { type, payload }) {
  if (reducers[type]) {
    return reducers[type]({ state, payload });
  }

  return state;
}
