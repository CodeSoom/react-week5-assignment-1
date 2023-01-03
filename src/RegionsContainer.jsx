import { useEffect, useState } from 'react';

import Regions from './Regions';

const RegionsContainer = () => {
  const [regions, setRegions] = useState([]);

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

      setRegions(fetchedRegions);
    })();
  }, []);

  return (
    <Regions regions={regions} onUpdateCheckedRegion={updateCheckedRegions} />
  );
};
export default RegionsContainer;
