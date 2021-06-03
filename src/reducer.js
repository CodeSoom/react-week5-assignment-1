const initialState = {
  newId: 100,
  regions: [],
  categories: [],
};

const defaultAction = {
  type: '',
};

const stateByActionType = {
  setRegions: ({ state, action }) => ({
    ...state,
    regions: action.payload.regions,
  }),
  setCategories: ({ state, action }) => ({
    ...state,
    categories: action.payload.categories,
  }),
};

export default function reducer(state = initialState, action = defaultAction) {
  return stateByActionType[action.type]
    ? stateByActionType[action.type]({ state, action })
    : state;
}
