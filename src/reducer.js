const initialState = {
  newId: 100,
  regions: [],
  categories: [],
  selectedRegion: { id: 0, name: '' },
  selectedCategory: { id: 0, name: '' },
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
  selecteRegion: ({ state, action }) => ({
    ...state,
    selectedRegion: action.payload.region,
  }),
  selecteCategory: ({ state, action }) => ({
    ...state,
    selectedCategory: action.payload.category,
  }),
};

export default function reducer(state = initialState, action = defaultAction) {
  return stateByActionType[action.type]
    ? stateByActionType[action.type]({ state, action })
    : state;
}
