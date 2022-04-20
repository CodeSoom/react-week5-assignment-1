import { useDispatch, useSelector } from 'react-redux';

import Buttons from '../components/Buttons';

import { updateRegionName } from '../redux/actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, regionName } = useSelector((state) => ({
    regions: state.regions,
    regionName: state.regionName,
  }));

  function handleRegionClick({ value }) {
    dispatch(updateRegionName({ regionName: value }));
  }

  return (
    <Buttons
      value="name"
      buttonList={regions}
      currentButtonInfo={regionName}
      emptyMessage="지역이 없어요!"
      onButtonClick={handleRegionClick}
    />
  );
}
