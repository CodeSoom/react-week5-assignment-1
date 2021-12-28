import { useSelector } from 'react-redux';

export default function RegionListContainer() {
  const { regions, selectedRegionId } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionId: state.selected.regionId,
  }));

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button type="button" id={id}>
            {`${name}${id === selectedRegionId ? '(V)' : ''}`}
          </button>
        </li>
      ))}
    </ul>
  );
}
