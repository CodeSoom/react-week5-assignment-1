const initialState = {
  regions: [],
};

const reducerAction = {
  getRegions: (state, action) => ({
    ...state,
    regions: action.payload.regions,
  }),
};

export default function reducer(state = initialState, action) {
  if (!reducerAction[action.type]) {
    return state;
  }

  return reducerAction[action.type](state, action);
}
