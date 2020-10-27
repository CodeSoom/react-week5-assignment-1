const initialState = {
  selectedOption: {
    region: null,
    category: null,
  },
  option: {
    regions: [],
    categories: [],
  },
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

function setOptions({ state, payload: { optionName, values } }) {
  const { option } = state;
  return {
    ...state,
    option: {
      ...option,
      [optionName]: values,
    },
  };
}

function setRestaurants({ state, payload: { restaurants } }) {
  return {
    ...state,
    restaurants,
  };
}

const reducers = {
  selectOption,
  setOptions,
  setRestaurants,
};

export default function reducer(state = initialState, { type, payload }) {
  if (!reducers[type]) {
    return state;
  }

  return reducers[type]({ state, payload });
}
