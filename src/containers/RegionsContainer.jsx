import { useSelector } from 'react-redux';

import Regions from '../components/Regions';

export default function RegionsContainer() {
  const regions = useSelector((state) => state.regions);

  return (
    <>
      <Regions regions={regions} />
    </>
  );
}
