import { useSelector } from 'react-redux';

import Region from './Region';

export default function RigionContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return <Region regions={regions} />;
}
