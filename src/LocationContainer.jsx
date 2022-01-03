import { useDispatch, useSelector } from 'react-redux';

import Buttons from './Buttons';

import {
  setLocation,
} from './action';

export default function LocationContainer() {
  const dispatch = useDispatch();

  const { location, locations } = useSelector((state) => ({
    location: state.location,
    locations: state.locations,
  }));

  function handleClickLocation(clickedLocation) {
    dispatch(setLocation(clickedLocation));
  }

  return (
    <Buttons
      stateValue={location}
      valueList={locations}
      onClick={handleClickLocation}
    />
  );
}
