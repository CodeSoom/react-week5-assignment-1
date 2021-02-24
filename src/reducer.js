import { GET_REGIONS_SUCCESS } from './actions';

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  error: { regions: null, categories: null, restaurants: null },
  watching: { region: null, category: null },
};

const actionHandler = {

  [GET_REGIONS_SUCCESS](state, action) {
    const regions = action.payload.map((region) => ({ ...region, clicked: false }));
    return { ...state, regions };
  },

  WATCH_THE_REGION(state, action) {
    const { watching } = state;
    const regions = state.regions.map((region) => (region.name === '울산'
      ? { ...region, clicked: true }
      : { ...region, clicked: false }));

    return { ...state, regions, watching: { ...watching, region: '울산' } };
  },
};

export default function reducer(state = initialState, action = { type: undefined }) {
  return actionHandler[action.type] ? actionHandler[action.type](state, action) : state;
}
