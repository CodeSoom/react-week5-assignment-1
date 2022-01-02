import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from './Button';

import {
  loadRegions,
  selectRegion,
  loadRestaurants,
} from './actions';

export default function Regions() {
  const dispatch = useDispatch();
  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  function clickHandler(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <ul>
    {regions.map((region) => (
      <li key={region.id}>
        <Button id={region.id} onClick={() => clickHandler(region.id)}>
          {region.name}
          {selectedRegion && region.id === selectedRegion.id ? '(V)' : null}
        </Button>
      </li>
    ))}
  </ul>
  );
}
