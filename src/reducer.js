import { GET_REGIONS_SUCCESS } from './actions';

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  error: { regions: null, categories: null, restaurants: null },
};

const actionHandler = {

  [GET_REGIONS_SUCCESS](state, action) {
    return { ...state, regions: ['서울', '인천', '대구', '부산', '울산', '광주'] };
  },
};

export default function reducer(state = initialState, action = { type: undefined }) {
  return actionHandler[action.type] ? actionHandler[action.type](state, action) : state;
}
