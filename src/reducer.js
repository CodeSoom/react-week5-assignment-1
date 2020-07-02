export const initialState = {
  regions: [],
  categories: [],
  regionName: '',
  categoryId: -1,
};

const reducers = {
  setRegion: (state, action) => ({
    ...state,
    regionName: action.payload.regionName,
  }),
  setCategory: (state, action) => ({
    ...state,
    categoryId: action.payload.categoryId,
  }),
};

export function reducer(state = initialState, action) {
  if (!action || !reducers[action.type]) {
    return state;
  }

  return reducers[action.type](state, action);
}
