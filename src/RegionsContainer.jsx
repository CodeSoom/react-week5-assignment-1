import { useDispatch, useSelector } from 'react-redux';

import { chooseRegion } from './actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  function handleClick(region) {
    dispatch(chooseRegion(region));
  }

  return (<Regions regions={regions} selectedRegion={selectedRegion} onClick={handleClick} />);
}
