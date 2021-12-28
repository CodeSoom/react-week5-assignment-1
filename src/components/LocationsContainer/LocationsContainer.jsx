import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Locations from '../Locations/Locations';
import { setCategories, fetchCategories } from '../../reducer/actions';

export default function LocationsContainer() {
  const locations = useSelector((store) => store.locations);
  const dispatch = useDispatch();
  const handleLocation = (location) => {
    dispatch(setCategories(location));
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <Locations
      locations={locations}
      onClick={handleLocation}
    />
  );
}
