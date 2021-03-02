const initialState = {
  regions: [
    {
      id: 1,
      name: '서울',
    },
    {
      id: 2,
      name: '대전',
    },
  ],
  categories: [
    {
      id: 1,
      name: '한식',
    },
    {
      id: 2,
      name: '중식',
    },
  ],
  selectedRegion: '',
  selectedCategory: '',
  restaurants: [
    {
      id: 1,
      name: '양천주가',
    },
    {
      id: 2,
      name: '한국식 초밥',
    },
  ],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setSelectedRegion') {
    const { name } = action.payload;
    return ({
      ...state,
      selectedRegion: name,
    });
  }

  if (action.type === 'setSelectedCategory') {
    const { name } = action.payload;
    return ({
      ...state,
      selectedCategory: name,
    });
  }
  return state;
}
