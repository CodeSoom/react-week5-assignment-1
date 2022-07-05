import { setRegions } from './actions';
import { fetchRegions } from './services/api';

export const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
};

export const toDoDelte = () => {};
