import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Regions from './Regions';
import { setRegions } from './store/actions';

const fetchRegions = ({ dispatch }) => {
  const regions = [];
  dispatch(setRegions(regions));
};

const RegionsContainer = () => {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  console.log(regions);

  const updateCheckedRegions = (checkedRegionId) => {
    const updatedRegions = regions.map((region) => {
      const newRegion = {
        ...region,
        checked: false,
      };

      if (region.id === checkedRegionId) {
        newRegion.checked = true;
      }

      return newRegion;
    });

    setRegions(updatedRegions);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch('https://eatgo-customer-api.ahastudio.com/regions');
      const fetchedRegions = await response.json();

      fetchRegions(fetchedRegions);
    })();
  }, []);

  return (
    <Regions regions={regions} onUpdateCheckedRegion={updateCheckedRegions} />
  );
};
export default RegionsContainer;
