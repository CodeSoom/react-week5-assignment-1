const initialState = {
  regions: [],
  categories: [],
};

const handlers = {
  setRegions: (state, { regions }) => ({
    ...state,
    regions: [...regions],
  }),
};

export default function reducer(state = initialState, action) {
  return handlers[action.type] ? handlers[action.type](state, action.payload) : state;
}
