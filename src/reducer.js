const initialState = {
  selected: {
    region: '',
    categoryId: '',
  },
  categories: [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
    { id: 3, name: '일식' },
    { id: 4, name: '양식' },
    { id: 5, name: '분식' },
  ],
  regions: [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
    { id: 3, name: '대구' },
    { id: 4, name: '부산' },
    { id: 5, name: '광주' },
    { id: 6, name: '강원도' },
    { id: 7, name: '인천' },
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

  return state;
}
