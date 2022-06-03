import {
  setFieldId,
  setRegions,
  setCategories,
  setRestaurants,
} from './services';

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  regionId: null,
  categoryId: null,
};

const operations = {
  setFieldId: (state, action) => setFieldId(state, action),
  setRegions: (state, action) => setRegions(state, action),
  setCategories: (state, action) => setCategories(state, action),
  setRestaurants: (state, action) => setRestaurants(state, action),
};

export default function reducer(state = initialState, action) {
  return operations[action.type]
    ? operations[action.type](state, action)
    : state;
}
