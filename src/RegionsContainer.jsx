import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateRestaurant, loadRestaurants, loadRestaurantsName } from './actions';
import RegionList from './RegionList';

const RegionsContainer = () => {
  const dispatch = useDispatch();

  const { regions, region } = useSelector((state) => ({
    region: state.region,
    regions: state.regions,
  }));

  useEffect(() => {
    dispatch(loadRestaurants('regions'));
  }, []);

  const handleClickButton = (selectRestaurant) => {
    dispatch(updateRestaurant(selectRestaurant));
    dispatch(loadRestaurantsName());
  };

  return (
    <>
      <RegionList
        regions={regions}
        onSelectRegionClick={handleClickButton}
        selectedRegion={region}
      />
    </>
  );
};

export default RegionsContainer;
