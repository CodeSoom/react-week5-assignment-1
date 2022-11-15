import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';

import { selectRegion } from './actions';

export default function RegionContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  function handleClickCheck(name) {
    dispatch(selectRegion(name));
  }

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      onClick={handleClickCheck}
    />
  );
}
