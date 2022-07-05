import {
  fetchRegions,
} from '../services/api';

import {
  setRegions,
} from './actions';

const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
};

export {
  loadRegions,
};
