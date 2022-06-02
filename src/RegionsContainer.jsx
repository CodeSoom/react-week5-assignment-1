import { useDispatch, useSelector } from 'react-redux';

import { chooseRegion } from './actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, clickedRegion } = useSelector((state) => ({
    regions: state.regions,
    clickedRegion: state.clickedRegion,
  }));

  function handleClick(region) {
    dispatch(chooseRegion(region));
  }

  return (<Regions regions={regions} clickedRegion={clickedRegion} onClick={handleClick} />);
}
