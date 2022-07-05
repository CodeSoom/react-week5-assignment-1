import { useSelector } from 'react-redux';

export default function RegionsContainer() {
  const regions = useSelector((state) => state.regions);

  return (
    <ul>
      {
        regions.map((region) => (
          <li key={region.id}>
            {region.name}
          </li>
        ))
      }
    </ul>
  );
}
