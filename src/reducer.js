import {
  SET_CATEGORIES, SET_SELECTED_CATEGORY_ID, UPDATE_RESTAURANT_PROPERTY, ADD_RESTAURANT,
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

  [UPDATE_RESTAURANT_PROPERTY]: (previousState, payload) => {
    const { restaurant } = previousState;
    const { propertyName, propertyValue } = payload;
    return {
      ...previousState,
      restaurant: {
        ...restaurant,
        [propertyName]: propertyValue,
      },
    };
  },

  [ADD_RESTAURANT]: (previousState) => {
    const { restaurants, restaurant } = previousState;

    if (!restaurant) {
      return previousState;
    }

    if (!restaurant.name || !restaurant.category || !restaurant.address) {
      return previousState;
    }

    return {
      ...previousState,
      restaurants: [...restaurants, restaurant],
      restaurant: {
        id: restaurant.id + 1,
        name: '',
        category: '',
        address: '',
      },
    };
  },
};

const initialState = {
  categories: [],
  selectedCategoryId: null,
  restaurants: [],
  restaurant: {
    id: 0,
    name: '',
    category: '',
    address: '',
  },
};

export default function reducer(previousState = initialState, action) {
  const { type, payload } = action;
  const actionHandler = ReducerRouter[type];
  if (actionHandler) {
    return actionHandler(previousState, payload);
  }
  return previousState;
}
