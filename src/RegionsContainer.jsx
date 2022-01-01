import { useDispatch, useSelector } from 'react-redux';
import { checkCategory } from './actions';
import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, checkedRegion } = useSelector((state) => ({
    regions: state.regions,
    checkedRegion: state.checkedRegion,
  }));

  function handleChangeSelectedRegion(event) {
    const categoryId = event.target.value;
    dispatch(checkCategory(categoryId));
  }

  return (
    <Regions
      regions={regions}
      checkedRegion={checkedRegion}
      onClick={handleChangeSelectedRegion}
    />
  );
}
