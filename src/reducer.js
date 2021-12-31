export const initialState = {
  currentRegion: "",
  currentCategory: "",
  Regions: [],
  Categories: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_INITIAL_STATE":
      return {
        ...state,
        Regions: [...action.payload.regions],
        Categories: [...action.payload.categories],
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
