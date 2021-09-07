const reducers = {
  UPDATE_FIELD: (state, action) => ({
    ...state,
    [action.payload.field]: action.payload.value,
  }),
};

const reducer = (state, action) => reducers[action.type](state, action);

export default reducer;
