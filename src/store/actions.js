import { fetchRegions } from '../services/api';

const setRegions = (regions) => ({
  type: 'setRegions',
  payload: {
    regions,
  },
});

const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();

  dispatch(setRegions(regions));
};

export { setRegions, loadRegions };
