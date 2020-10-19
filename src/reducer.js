import { SET_REGIONS } from './actions';

const initialState = {
  regions: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_REGIONS) {
    return {
      ...state,
      regions: action.payload,
    };
  }

  return state;
}
