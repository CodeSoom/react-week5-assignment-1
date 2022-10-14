export default function Regions({ regions }) {
  return (
    <ul>
      {regions.map((region) => (<button type="button" key={region.key}>{region.name}</button>))}
    </ul>
  );
}
