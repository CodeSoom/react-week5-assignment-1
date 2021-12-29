import { useDispatch, useSelector } from 'react-redux';

import { setRegion } from '../../stores/actions';

import Options from '../common/Options';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { selectedRegionId, regions } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionId: state.region.id,
  }));

  const updateSelectedRegion = (region) => {
    dispatch(setRegion(region));
  };

  return (
    <Options
      options={regions}
      updateSelectedOption={updateSelectedRegion}
      selectedId={selectedRegionId}
    />
  );
}
