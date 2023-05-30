import { fetchRegions } from '../../services/api';

export const setRegions = (regions) => ({
  type: 'setRegions',
  payload: {
    regions,
  },
});

export const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();

  dispatch(setRegions(regions));
};

export const checkRegion = (checkedRegionId) => ({
  type: 'checkRegion',
  payload: {
    checkedRegionId,
  },
});
