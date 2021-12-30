export const initialState = {
  currentRegion: "",
  currentCategory: "",
  Regions: [],
  Categories: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_INITIAL_STATE":
      return {
        ...state,
        Regions: [...state.Regions, ...action.payload.regions],
        Categories: [...state.Categories, ...action.payload.categories],
      };
    case "CHANGE_REGION":
      return {
        ...state,
        currentRegion: action.payload.id,
      };
    case "CHANGE_CATEGORY":
      return {
        ...state,
        currentCategory: action.payload.id,
      };
    default:
      return state;
  }
}
