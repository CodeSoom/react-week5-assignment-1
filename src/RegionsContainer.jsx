import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';
import { setRegions } from './store/actions';

import { fetchRegions } from './services/api';

const loadRegions = async ({ dispatch }) => {
  const regions = await fetchRegions();

  dispatch(setRegions(regions));
};

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
    (async () => {
      loadRegions({ dispatch });
    })();
  }, []);

  return (
    <Regions regions={regions} onUpdateCheckedRegion={updateCheckedRegions} />
  );
};
export default RegionsContainer;
