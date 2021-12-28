import { useSelector } from 'react-redux';

import Categories from './Categories';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>{region.name}</li>
      ))}
    </ul>
  );
}
