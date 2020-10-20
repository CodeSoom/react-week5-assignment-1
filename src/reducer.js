const initialState = {
  categorys: [],
};

const reducers = {
  loadCategory: (state, { categorys }) => ({
    ...state,
    categorys,
  }),
};

const reducer = (state = initialState, { type, payload }) => reducers[type](state, payload);

export default reducer;
