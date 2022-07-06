import { useEffect, useState } from 'react';

import { fetchRegions } from './service/api';

import Region from './Region';

export default function RegionContainer() {
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState({});

  const handleClick = (setter, value) => () => {
    setter(value);
  };

  const loadRegions = async () => {
    const regionsData = await fetchRegions();

    setRegions(regionsData);
  };

  useEffect(() => {
    loadRegions();
  }, []);

  return (
    <Region
      onClick={handleClick}
      regions={regions}
      selectedRegion={selectedRegion}
      setSelectedRegion={setSelectedRegion}
    />

  );
}
