const initialState = {
  regions: [],
  categories: [],
  selectedCategory: '',
  selectedRegion: '',
  restaurants: [],
};

const initialAction = {
  type: 'initialAction',
};

const reducers = {
  setRegions: (state, { regions }) => ({
    ...state,
    regions,
  }),
  setCategories: (state, { categories }) => ({
    ...state,
    categories,
  }),
  selectCategory: (state, payload) => {
    const newCategories = state.categories
      .map((category) => {
        const { id } = category;

        return {
          ...category,
          checked: id === payload.id ? 'checked' : '',
        };
      });

    return {
      ...state,
      categories: newCategories,
      selectedCategory: payload.id,
    };
  },
  selectRegion: (state, payload) => {
    const newRegions = state.regions
      .map((region) => {
        const { id, name } = region;

        return {
          ...region,
          name: id === payload.id
            ? `${name.replace('(v)', '')}(v)`
            : name.replace('(v)', ''),
        };
      });

    return {
      ...state,
      regions: newRegions,
      selectedRegion: payload.name,
    };
  },
};

export default function reducer(state = initialState, action = initialAction) {
  const { type, payload } = action;

  if (!reducers[type]) {
    return state;
  }

  return reducers[type](state, payload);
}
