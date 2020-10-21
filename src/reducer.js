const initialState = {
  categories: [],
  regions: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'checkCategories') {
    const { id, isChecked } = action.payload;

    return {
      ...state,
      categories: [...state.categories.map((category) => (
        category.id === id ? { ...category, isChecked: !isChecked } : category
      )),
      ],
    };
  }

  if (action.type === 'checkRegions') {
    const { id, isChecked } = action.payload;

    return {
      ...state,
      regions: [...state.regions.map((region) => (
        region.id === id ? { ...region, isChecked: !isChecked } : region
      )),
      ],
    };
  }

  if (action.type === 'initializeCheckedCategories') {
    const { categories } = state;
    const { id } = action.payload;

    const checkedCategories = categories.filter((category) => category.isChecked === true);

    if (checkedCategories.length === 2) {
      return {
        ...state,
        categories: [...categories.map((category) => (
          category.id === id ? category : { ...category, isChecked: false }
        )),
        ],
      };
    }

    return state;
  }
  if (action.type === 'initializeCheckedRegions') {
    const { regions } = state;
    const { id } = action.payload;

    const checkedRegions = regions.filter((region) => region.isChecked === true);

    if (checkedRegions.length === 2) {
      return {
        ...state,
        regions: [...regions.map((region) => (
          region.id === id ? region : { ...region, isChecked: false }
        )),
        ],
      };
    }
    return state;
  }

  if (action.type === 'setCategories') {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  }

  if (action.type === 'setRegions') {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
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
