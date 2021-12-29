import { useDispatch, useSelector } from 'react-redux';

import Locations from './Locations';

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
    <Locations
      location={location}
      locations={locations}
      onClick={handleClickLocation}
    />
  );
}
