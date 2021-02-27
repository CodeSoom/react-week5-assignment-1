
const initialState = {
  regions : [],
  categories : [],
  selected: {
    region : {
      id: '',
      name: '',
    },
    category : {
      id: '',
      name: '',
    },
  }
}

export default function reducer(state = initialState, action) {

  if (action.type === 'setRegions') {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    }
  }

  if (action.type === 'setCategories') {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    }
  }

  if (action.type === 'setSelected') {
    const { selected } = action.payload;

    return {
      ...state,
      selected: {
        region: selected.region,
        category: selected.category,
      }
    }
  }
  
  return state;
}
