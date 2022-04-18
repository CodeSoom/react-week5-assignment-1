import { useDispatch, useSelector } from 'react-redux';
import { selectLocation } from './actions';

import Locations from './Locations';

export default function LocationsContainer() {
  const { locations } = useSelector((state) => ({
    locations: state.locations,
  }));

  const dispatch = useDispatch();

  function handleClick({ id }) {
    dispatch(selectLocation({ id }));
  }

  return (
    <>
      <Locations
        locations={locations}
        onClick={handleClick}
      />
    </>
  );
}
