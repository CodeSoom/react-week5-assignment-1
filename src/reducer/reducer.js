import SelectableItem from '../model/SelectableItem';

export const initialState = {
  locations: [],
  categories: [],
  restaurants: [],
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
  setRestaurants: (state, payload) => ({
    ...state,
    restaurants: payload.restaurants,
  }),
  setLocation: (state, payload) => {
    const { location } = payload;
    const locations = SelectableItem.changeSelectedItem(state.locations, location.id);
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
    const categories = SelectableItem.changeSelectedItem(state.categories, category.id);

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
