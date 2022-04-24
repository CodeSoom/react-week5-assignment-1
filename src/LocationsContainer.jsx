import { useDispatch, useSelector } from 'react-redux';

import List from './List';

import { selectLocation } from './actions';

export default function LocationsContainer() {
  const { locations, locationName } = useSelector((state) => ({
    locations: state.locations,
    locationName: state.locationName,
  }));

  const dispatch = useDispatch();

  function handleClick({ id }) {
    dispatch(selectLocation({ id }));
  }

  const selectedLocation = locations.find((location) => location.name === locationName);

  return (
    <List
      items={locations}
      selectedItemId={selectedLocation?.id || ''}
      onClick={handleClick}
    />
  );
}
