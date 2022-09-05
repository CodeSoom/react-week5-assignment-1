import { useDispatch, useSelector } from 'react-redux';

import { selectRegion, loadRestaurants } from './actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const { regions, selectedRegion, selectedCategory } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
    selectedCategory: state.selectedCategory,
  }));

  const dispatch = useDispatch();

  const handleClick = (region) => {
    dispatch(selectRegion(region));
    if (selectedCategory.id !== undefined) {
      dispatch(loadRestaurants(region, selectedCategory));
    }
  };

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      onRegionClick={handleClick}
    />
  );
}
