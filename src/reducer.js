export const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selectedButtons: {
    region: '',
    category: '',
  },
};

export default function reducer(state = initialState, action) {
  const router = {
    intializeSelectButtons: () => ({
      ...state,
      regions: [{ id: 1, name: '서울' }, { id: 2, name: '대전' }, { id: 3, name: '대구' }, { id: 4, name: '부산' }, { id: 5, name: '광주' }, { id: 6, name: '강원도' }, { id: 7, name: '인천' }],
      categories: [{ id: 1, name: '한식' }, { id: 2, name: '중식' }, { id: 3, name: '일식' }, { id: 4, name: '양식' }, { id: 5, name: '분식' }, { id: 6, name: '과자' }, { id: 7, name: '치킨' }],
    }),

    setSelectedButton: () => {
      const { type, value } = action.payload;

      return {
        ...state,
        selectedButtons: {
          ...state.selectedButtons,
          [type]: value,
        },
      };
    },

    setRestaurants: () => ({
      ...state,
      restaurants: action.payload,
    }),
  };

  return (router[action.type] || (() => state))();
}
