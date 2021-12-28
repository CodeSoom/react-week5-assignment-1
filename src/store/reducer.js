import { CHANGE_CATEGORY, CHANGE_REGION } from './actions';
import { identity } from '../lib';

const initialState = {
  selected: {
    regionId: null,
    categoryId: null,
  },
  regions: [
    {
      id: 1,
      name: '서울',
    },
    {
      id: 2,
      name: '대전',
    },
    {
      id: 3,
      name: '대구',
    },
    {
      id: 4,
      name: '부산',
    },
    {
      id: 5,
      name: '광주',
    },
    {
      id: 6,
      name: '강원도',
    },
    {
      id: 7,
      name: '인천',
    },
    {
      id: 8,
      name: '제주',
    },
    {
      id: 9,
      name: '전주',
    },
    {
      id: 10,
      name: '순천',
    },
    {
      id: 11,
      name: '독도',
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
    {
      id: 3,
      name: '일식',
    },
    {
      id: 4,
      name: '양식',
    },
    {
      id: 5,
      name: '분식',
    },
    {
      id: 6,
      name: '과자',
    },
    {
      id: 7,
      name: '치킨',
    },
    {
      id: 1003,
      name: '테스트',
    },
    {
      id: 1034,
      name: '음료',
    },
    {
      id: 1036,
      name: '사탕',
    },
  ],
};

const reducers = {
  [CHANGE_REGION]: (state, action) => ({
    ...state,
    selected: {
      ...state.selected,
      regionId: action.payload.regionId,
    },
  }),
  [CHANGE_CATEGORY]: (state, action) => ({
    ...state,
    selected: {
      ...state.selected,
      categoryId: action.payload.categoryId,
    },
  }),
};

function reducer(state = initialState, action) {
  return (reducers[action.type] || identity)(state, action);
}

export default reducer;
