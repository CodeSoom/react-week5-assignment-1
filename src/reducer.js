const initialState = {
  regions : [],
  categories : [],
}

export default function reducer(state = initialState, action) {
  // if (action.type === 'chooseRegions') {
  //   const { regions } = action.payload;
  //   return {
  //     ...state,
  //     regions,
  //   }
  // }

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
  
  return state;
}
