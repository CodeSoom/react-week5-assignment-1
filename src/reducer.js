const initialState = {};

const defaultReducer = (state) => state;

const reducers = {};

export default function reducer(state = initialState, action) {
  return reducers[action.type] || defaultReducer(state, action);
}
