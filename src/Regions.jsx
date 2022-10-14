export default function Regions({ regions }) {
  return (
    <ul>
      {regions.map((region) => (<li><button type="button" key={region.key}>{region.name}</button></li>))}
    </ul>
  );
}
