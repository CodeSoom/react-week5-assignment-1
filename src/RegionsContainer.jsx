import { useEffect, useState } from 'react';

import Regions from './Regions';

export default function RegionsContainer() {
  const [regions, setRegions] = useState({
    categoreis: [],
  });

  useEffect(() => {
    setRegions([
      { id: 1, name: '서울' },
    ]);
  }, []);

  return (
    <Regions regions={regions} />
  );
}
