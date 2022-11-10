export default function Regions({ regions, onClick }) {
  return (
    <div>
      {
        regions.map((region) => <button type="button" key={region.id} onClick={() => onClick(region.name)}>{region.name}</button>)
      }
    </div>
  );
}
