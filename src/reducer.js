import {
  SET_CATEGORIES, SET_SELECTED_CATEGORY_ID,
  SET_REGIONS, SET_SELECTED_REGIONS_ID,
  SET_RESTAURANTS,
} from './actions';

const ReducerRouter = {
  [SET_CATEGORIES]: (previousState, payload) => {
    const { categories } = payload;
    return {
      ...previousState,
      categories,
      selectedCategoryId: null,
    };
  },

  [SET_SELECTED_CATEGORY_ID]: (previousState, payload) => {
    const { selectedCategoryId } = payload;
    return {
      ...previousState,
      selectedCategoryId,
    };
  },

  [SET_REGIONS]: (previousState, payload) => {
    const { regions } = payload;
    return {
      ...previousState,
      regions,
      selectedRegionId: null,
    };
  },

  [SET_SELECTED_REGIONS_ID]: (previousState, payload) => {
    const { selectedRegionId } = payload;
    return {
      ...previousState,
      selectedRegionId,
    };
  },

  [SET_RESTAURANTS]: (previousState, payload) => {
    const { restaurants } = payload;
    return {
      ...previousState,
      restaurants,
    };
  },
};

const initialState = {
  categories: [],
  selectedCategoryId: null,
  regions: [],
  selectedRegionId: null,
  restaurants: [],
};

export default function reducer(previousState = initialState, action) {
  const { type, payload } = action;
  const actionHandler = ReducerRouter[type];
  if (actionHandler) {
    return actionHandler(previousState, payload);
  }
  return previousState;
}
