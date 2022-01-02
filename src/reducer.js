export const initialState = {
  currentRegion: "",
  currentCategory: "",
  Regions: [],
  Categories: [],
  Restaurants: [],
};

export default function reducer(state = initialState, action) {
  switch (action?.type) {
    case "SET_INITIAL_STATE":
      return {
        ...state,
        Regions: [...action.payload.regions],
        Categories: [...action.payload.categories],
      };
    case "CHANGE_REGION":
      return {
        ...state,
        currentRegion: action.payload.name,
      };
    case "CHANGE_CATEGORY":
      return {
        ...state,
        currentCategory: action.payload.id,
      };
    case "SET_RESTAURANTS":
      return {
        ...state,
        Restaurants: action.payload.restaurants,
      };
    default:
      return state;
  }
}
