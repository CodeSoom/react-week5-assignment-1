import reducers from './reducerHandlers';

export const initialState = {
  regions: [],
};

const reducer = (state = initialState, action) => {
  if (!action || !reducers[action.type]) {
    return state;
  }

  return reducers[action.type](state, action);
};

export default reducer;
