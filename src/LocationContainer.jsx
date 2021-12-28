import { useDispatch, useSelector } from 'react-redux';

import Locations from './Locations';

import {
  setLocation,
} from './action';

export default function LocationContainer() {
  const dispatch = useDispatch();

  const { locations } = useSelector((state) => ({
    locations: state.locations,
  }));

  function handleClick({ location }) {
    dispatch(setLocation({ location }));
  }

  return (
    <Locations
      locations={locations}
      onClick={handleClick}
    />
  );
}
