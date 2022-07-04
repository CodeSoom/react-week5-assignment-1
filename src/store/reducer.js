import reducers from './reducerHandler';

export const initailState = {
  categories: [],
  regions: [],
};

export default function reducer(state = initailState, action) {
  if (!action || !reducers[action.type]) {
    return state;
  }
  return reducers[action.type](state, action);
}
