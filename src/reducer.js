const initialState = {
  regions: [],
};

const reducers = {
  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action = { type: '' }) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
