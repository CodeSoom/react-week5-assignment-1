import { useSelector } from 'react-redux';

import Region from './Region';

export default function RegionContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  function handleClick() {

  }

  return <Region regions={regions} onClick={handleClick} />;
}
