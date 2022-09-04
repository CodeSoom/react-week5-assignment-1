// const initialCategory = {
//   id: ,
//   name: '',
// };

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],

  selectedRegion: {
    id: '',
    name: '',
  },
  selectedCategory: {
    id: '',
    name: '',
  },
};

const reducers = {
  setRegions: (state, action) => {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  },

  setCategories: (state, action) => {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  },

  setRestaurants: (state, action) => {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  },

  selectRegion: (state, action) => {
    const { selectedRegion } = action.payload;

    return {
      ...state,
      selectedRegion,
    };
  },

  selectCategory: (state, action) => {
    const { selectedCategory } = action.payload;

    return {
      ...state,
      selectedCategory,
    };
  },
};

export default function reducer(state = initialState, action = { type: undefined }) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
