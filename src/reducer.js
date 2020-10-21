const initialState = {
  categories: [
    { id: 1, name: '한식', isChecked: false },
    { id: 2, name: '중식', isChecked: false },
    { id: 3, name: '일식', isChecked: false },
    { id: 4, name: '양식', isChecked: false },
    { id: 5, name: '분식', isChecked: false },
  ],
  regions: [
    { id: 1, region: '서울', isChecked: false },
    { id: 2, region: '대구', isChecked: false },
    { id: 3, region: '부산', isChecked: false },
    { id: 4, region: '대전', isChecked: false },
    { id: 5, region: '강원도', isChecked: false },
    { id: 6, region: '광주', isChecked: false },
  ],
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
  return state;
}
