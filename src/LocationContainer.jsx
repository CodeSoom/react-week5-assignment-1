import { useSelector } from 'react-redux';

import Locations from './Locations';

export default function LocationContainer() {
  const { locations } = useSelector((state) => ({
    locations: state.locations,
  }));

  return (
    <Locations locations={locations} />
  );
}
