const initialState = {
  places: [],
  categories: [],
  restaurants: [],
  clickedPlace: '',
  clickedCategory: '',
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setPlaces') {
    const { places } = action.payload;

    return {
      ...state,
      places,
    };
  }

  if (action.type === 'setCategories') {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  }

  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  }

  if (action.type === 'clickPlace') {
    const { name } = action.payload;

    return {
      ...state,
      clickedPlace: name,
    };
  }

  if (action.type === 'clickCategory') {
    const { id } = action.payload;

    return {
      ...state,
      clickedCategory: id,
    };
  }
  return state;
}
