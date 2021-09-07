import { useSelector } from 'react-redux';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
