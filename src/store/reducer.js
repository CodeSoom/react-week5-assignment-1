import reducers from './reducerHandler';

export const initailState = {
  categories: [],
  regions: [],
  restaurants: [],
  selectedRegion: null,
  selectedCategory: null,
};

export default function reducer(state = initailState, action) {
  if (!action || !reducers[action.type]) {
    return state;
  }
  return reducers[action.type](state, action);
}
