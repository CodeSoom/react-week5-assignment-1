export default function Regions({ regions }) {
  return (
    <div>
      {
        regions.map((region) => <button type="button" key={region.id}>{region.name}</button>)
      }
    </div>
  );
}
