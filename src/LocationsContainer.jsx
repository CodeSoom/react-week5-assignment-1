import { useDispatch, useSelector } from 'react-redux';

import Locations from './Locations';

import { selectLocation } from './actions';

export default function LocationsContainer() {
  const { locations, locationName } = useSelector((state) => ({
    locations: state.locations,
    locationName: state.locationName,
  }));

  const dispatch = useDispatch();

  function handleClick({ name }) {
    dispatch(selectLocation({ name }));
  }

  return (
    <Locations
      locations={locations}
      locationName={locationName}
      onClick={handleClick}
    />
  );
}
