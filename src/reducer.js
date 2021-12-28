function initialState() {
  return {
    newId: 100,
    nameValue: '',
    categoryValue: '',
    placeValue: '',
    restaurants: [
      {
        id: 1,
        name: '모토쿠라시',
        category: '일식',
        place: '서울 송파구',
      },
    ],
  };
}

export default function reducer(state = initialState, action) {
  if (action.type === 'changeNameValue') {
    return {
      ...state,
      nameValue: action.payload.nameValue,
    };
  }

  if (action.type === 'changeCategoryValue') {
    return {
      ...state,
      categoryValue: action.payload.categoryValue,
    };
  }

  if (action.type === 'changePlaceValue') {
    return {
      ...state,
      placeValue: action.payload.placeValue,
    };
  }

  if (action.type === 'clickAdd') {
    const {
      newId, nameValue, categoryValue, placeValue, restaurants,
    } = state;

    return {
      ...state,
      newId: newId + 1,
      restaurants: [...restaurants,
      {
        id: newId,
        name: nameValue,
        category: categoryValue,
        place: placeValue,
      },
      ],
    };
  } return state;
}
