import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';
import { checkRegion, loadRegions } from './store/actions';

const RegionsContainer = () => {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  const dispatch = useDispatch();

  const updateCheckedRegions = (checkedRegionId) => {
    dispatch(checkRegion(checkedRegionId));
  };

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <Regions regions={regions} onUpdateCheckedRegion={updateCheckedRegions} />
  );
};

export default RegionsContainer;
