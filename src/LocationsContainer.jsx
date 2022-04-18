import { useDispatch, useSelector } from 'react-redux';
import { selectLocation } from './actions';

import Locations from './Locations';

export default function LocationsContainer() {
  const { locations, locationId } = useSelector((state) => ({
    locations: state.locations,
    locationId: state.locationId,
  }));

  const dispatch = useDispatch();

  function handleClick({ id }) {
    dispatch(selectLocation({ id }));
  }

  return (
    <>
      <Locations
        locations={locations}
        locationId={locationId}
        onClick={handleClick}
      />
    </>
  );
}
