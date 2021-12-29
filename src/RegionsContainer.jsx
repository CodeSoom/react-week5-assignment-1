import { useSelector } from 'react-redux';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => state);

  return (
    <>
      {regions.map((region) => (
        <button type="button" key={region.id}>
          {region.name}
        </button>
      ))}
    </>
  );
}
