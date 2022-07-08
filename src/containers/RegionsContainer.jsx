import { useSelector, useDispatch } from 'react-redux';

import { selectRegion } from '../store/actions';

import Regions from '../components/Regions';

export default function RegionsContainer() {
  const regions = useSelector((state) => state.regions);

  const dispatch = useDispatch();

  const handleClickRegion = (regionId) => {
    dispatch(selectRegion(regionId));
  };

  return (
    <>
      <Regions
        regions={regions}
        onClickRegion={handleClickRegion}
      />
    </>
  );
}
