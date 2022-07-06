import { regionsSample } from './sampleData';

export const initialState = {
  regions: [],
  categories: [],
  region: '',
  category: '',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'getRegions') {
    // TODO : fetch 구현 필요.
    // 임시 데이터
    return {
      ...state,
      regions: regionsSample,
    };
  }

  if (action.type === 'setRegion') {
    const { region } = action.payload;
    return {
      ...state,
      region,
    };
  }

  return state;
};

export default reducer;
