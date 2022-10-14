export default function Regions({ regions }) {
  console.log(regions);
  return (
    <ul>
      {regions.map((region) => (<li><button type="button" key={region.key}>{region.name}</button></li>))}
    </ul>
  );
}
