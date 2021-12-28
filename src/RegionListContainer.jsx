import { useSelector } from 'react-redux';

export default function RegionListContainer() {
  const { regions } = useSelector((state) => ({ regions: state.regions }));

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button type="button">
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
