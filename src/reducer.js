const initialRestaurant = {
  name: '',
  category: '',
  address: '',
}

const initialState = {
  newId: 100,
  restaurants: [],
  restaurant: initialRestaurant,
  categories: [],
  regions: [],
};

function createReducer(originState, handlers) {
  return function reducer(state = originState, action) {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

function setRegions(state, action) {
  const { regions } = action.payload;
  return {
    ...state,
    regions,
  };
}

const reducer = createReducer(initialState, {
  setRegions: setRegions,
});

export default reducer;