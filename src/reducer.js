const initialState = {};

const defaultReducer = (state) => state;

const reducers = {
  setCategories: (state, { payload: { categories } }) => ({
    ...state,
    categories,
  }),
};

export default function reducer(state = initialState, action) {
  return reducers[action.type] || defaultReducer(state, action);
}
