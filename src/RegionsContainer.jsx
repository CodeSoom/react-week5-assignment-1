import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';
import { loadRegions, setRegions } from './store/actions';

const RegionsContainer = () => {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  const dispatch = useDispatch();

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
    dispatch(loadRegions());
  }, []);

  return (
    <Regions regions={regions} onUpdateCheckedRegion={updateCheckedRegions} />
  );
};
export default RegionsContainer;
