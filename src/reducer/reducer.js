import { checkItem } from '../util';

export const initialState = {
  locations: [],
  categories: [],
  selected: {
    location: null,
    category: null,
  },
};

const reducers = {
  setLocations: (state, payload) => ({
    ...state,
    locations: payload.locations,
  }),
  setCategories: (state, payload) => ({
    ...state,
    categories: payload.categories,
  }),
  setLocation: (state, payload) => {
    const { location } = payload;
    const locations = checkItem(state.locations, (item) => item.name === location.name);

    return {
      ...state,
      locations,
      selected: {
        ...state.selected,
        location,
      },
    };
  },
  setCategory: (state, payload) => {
    const { category } = payload;
    const categories = checkItem(state.categories, (item) => item.name === category.name);

    return {
      ...state,
      categories,
      selected: {
        ...state.selected,
        category,
      },
    };
  },
};

export default function rootReducer(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action.payload);
  }

  return state;
}
