import { useDispatch, useSelector } from 'react-redux';

import Region from './Region';

import {
  selectRegion,
} from './action';

function selector(state) {
  return {
    regionList: state.regionList,
  };
}

export default function RegionListContainer() {
  const { regionList } = useSelector(selector);

  const dispatch = useDispatch();

  function handleClickRegion({ id }) {
    dispatch(selectRegion({ id }));
  }

  return (
    <Region
      regionList={regionList}
      onClick={handleClickRegion}
    />
  );
}
