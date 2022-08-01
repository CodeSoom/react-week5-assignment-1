import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants, selectRegion } from './action';

import Region from './Region';

export default function RegionContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  const handleClick = (regionId) => {
    dispatch(selectRegion(regionId));

    dispatch(loadRestaurants());
  };

  return (
    <Region
      onClick={handleClick}
      regions={regions}
      selectedRegion={selectedRegion}
    />

  );
}
