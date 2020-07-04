const initialState = {
  selected: {
    region: '',
    categoryId: '',
  },
  categories: [],
  regions: [],
  restaurants: [
    {
      id: 1,
      categoryId: 1,
      name: '양천주가',
      address: '서울 강남구',
      information: '양천주가 in 서울 강남구',
    },
    {
      id: 6,
      categoryId: 1,
      name: '한국식 초밥',
      address: '서울 강남구',
      information: '한국식 초밥 in 서울 강남구',
    },
  ],
};

export default function reducer(state = initialState, action) {
  const { selected } = state;

  if (action.type === 'updateSelected') {
    return {
      ...state,
      selected: {
        ...selected,
        ...action.payload,
      },
    };
  }

  if (action.type === 'setRegions') {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
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

  return state;
}
