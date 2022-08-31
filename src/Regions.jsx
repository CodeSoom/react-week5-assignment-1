export default function Regions({ regions }) {
  return (
    <div>
      {regions.map((region) => (
        <div key={region.id}>
          <button type="button">
            {region.name}
          </button>
        </div>
      ))}
    </div>
  );
}
