const initialState = {
  regions: [],
  categories: [],
  regionName: '',
  categoryId: '',
  restaurants: [],
};

const reducerObject = {
  setRegions: ({ state, action }) => ({
    ...state,
    regions: action.payload.regions,
  }),

  setCategories: ({ state, action }) => ({
    ...state,
    categories: action.payload.categories,
  }),

  setRestaurants: ({ state, action }) => ({
    ...state,
    restaurants: action.payload.restaurants,
  }),

  regionSelect: ({ state, action }) => ({
    ...state,
    regionName: action.payload.regionName,
  }),

  categorySelect: ({ state, action }) => ({
    ...state,
    categoryId: action.payload.categoryId,
  }),
};

export default function reducer(state = initialState, action = { type: '' }) {
  return reducerObject[action.type] ? reducerObject[action.type]({ state, action }) : state;
}
