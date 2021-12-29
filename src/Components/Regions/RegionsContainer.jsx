import { useDispatch, useSelector } from 'react-redux';

import { setRegion } from '../../stores/actions';

import Options from '../common/Options';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { selectedRegion, regions } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.region,
  }));

  const updateSelectedRegion = (region) => {
    dispatch(setRegion(region));
  };

  return (
    <Options
      selectedId={selectedRegion}
      options={regions}
      updateSelectedOption={updateSelectedRegion}
    />
  );
}
