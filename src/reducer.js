import { ACTION_KEYS } from './actions';
import { categoriesSample, regionsSample } from './sampleData';

export const initialState = {
  regions: [],
  categories: [],
  region: '',
  category: '',
};

const reducer = (state = initialState, action) => {
  if (action.type === ACTION_KEYS.getRegions) {
    // TODO : fetch 구현 필요.
    // 임시 데이터
    return {
      ...state,
      regions: regionsSample,
    };
  }

  if (action.type === ACTION_KEYS.setRegion) {
    const { region } = action.payload;
    return {
      ...state,
      region,
    };
  }

  if (action.type === ACTION_KEYS.getCategories) {
    // TODO : fetch 구현 필요.
    // 임시 데이터
    return {
      ...state,
      categories: categoriesSample,
    };
  }

  if (action.type === ACTION_KEYS.setCategory) {
    const { category } = action.payload;
    return {
      ...state,
      category,
    };
  }

  return state;
};

export default reducer;
