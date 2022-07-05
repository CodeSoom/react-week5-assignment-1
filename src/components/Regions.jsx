export default function Regions({ regions = [] }) {
  if (!regions.length) return null;

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
