export const initialState = {
  regions: [],
  restorants: [],
  region: '',
  restorant: '',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'getRegions') {
    // TODO : fetch 구현 필요.
    // 임시 데이터
    return {
      ...state,
      regions: [
        { id: 0, name: '서울' },
        { id: 1, name: '대구' },
        { id: 2, name: '부산' },
      ],
    };
  }

  return state;
};

export default reducer;
