import { useDispatch, useSelector } from 'react-redux';
import { checkRegion } from './actions';
import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, checkedRegion } = useSelector((state) => ({
    regions: state.regions,
    checkedRegion: state.checkedRegion,
  }));

  function handleChangeSelectedRegion(event) {
    const regionName = event.target.value;
    dispatch(checkRegion(regionName));
  }

  return (
    <Regions
      regions={regions}
      checkedRegion={checkedRegion}
      onClick={handleChangeSelectedRegion}
    />
  );
}
