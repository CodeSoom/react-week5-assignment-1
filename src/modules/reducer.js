const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selected: {
    region: '',
    category: '',
  },
};

const reduce = {
  setRegions: (state, action) => {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  },
  selectRegion: (state, action) => {
    const { region } = action.payload;

    return {
      ...state,
      selected: {
        ...state.selected,
        region,
      },
    };
  },
  setCategories: (state, action) => {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  },
  selectCategory: (state, action) => {
    const { category } = action.payload;

    return {
      ...state,
      selected: {
        ...state.selected,
        category,
      },
    };
  },
};

export default function reducer(state = initialState, action) {
  if (!reduce[action.type]) {
    return state;
  }

  return reduce[action.type](state, action);
}
