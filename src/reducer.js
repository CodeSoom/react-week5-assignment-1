export const initialState = {
  locations: [],
  foodTypes: [],
  results: [],
  selectedButtons: {
    location: '',
    foodType: '',
  },
};

export default function reducer(state = initialState, action) {
  const router = {
    intializeSelectButtons: () => ({
      ...state,
      locations: ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'],
      foodTypes: ['한식', '중식', '일식', '양식', '분식'],
      results: ['양천주가', '밀면넘어져요'],
    }),

    setSelectedButton: () => ({
      ...state,
      selectedButtons: {
        ...state.selectedButtons,
        [action.payload.type]: action.payload.value,
      },
    }),
  };

  return (router[action.type] || (() => state))();
}
