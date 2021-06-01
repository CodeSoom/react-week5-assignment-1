export default function Rigion({ regions }) {
  return (
    <ul>
      {regions.map((region) => <li key={region.id}>{region.name}</li>)}
    </ul>
  );
}
