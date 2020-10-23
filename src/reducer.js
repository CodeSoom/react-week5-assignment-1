const initialState = {
  selectedOption: {
    region: null,
    category: null,
  },

  regions: [],
  categories: [],
  restaurants: [],
};

function selectOption({ state, payload: { option, id } }) {
  const { selectedOption } = state;
  return {
    ...state,
    selectedOption: {
      ...selectedOption,
      [option]: id,
    },
  };
}

function setRegions({ state, payload }) {
  return {
    ...state,
    regions: payload.regions,
  };
}

function setCategories({ state, payload }) {
  return {
    ...state,
    categories: payload.categories,
  };
}

const reducers = {
  selectOption,
  setRegions,
  setCategories,
};

export default function reducer(state = initialState, { type, payload }) {
  if (!reducers[type]) {
    return state;
  }

  return reducers[type]({ state, payload });
}
