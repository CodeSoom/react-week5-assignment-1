import { useSelector } from 'react-redux';

import Regions from './Regions';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => state);

  return (
    <Regions regions={regions} />
  );
}
